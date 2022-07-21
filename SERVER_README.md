# WebViewer BIM Server

WebViewer BIM Server is a REST server for performing 3D document work.

This server comes packaged as either a binary or a Docker image available for Linux or Windows.

- [Setting up Server](#setting-up-server)
  * [Docker Image](#docker-image)
- [Configuring Server](#configuring-server)
- [Running Server](#running-server)
  * [Running with binary and configuration file](#running-with-binary-and-configuration-file)
  * [Running with Docker and configuration file](#running-with-docker-and-configuration-file)
  * [Running with Docker and environment variables](#running-with-docker-and-environment-variables)
  * [Troubleshooting](#troubleshooting)
- [Testing the container](#testing-the-container)
- [Managing Docker](#managing-docker)
- [WebViewer BIM Server APIs](#webviewer-bim-server-apis)

## Setting up Server

### Docker Image

1. Install [AWS CLI](https://aws.amazon.com/cli/).
2. Install [Docker CLI](https://docs.docker.com/get-docker/).
3. Set AWS credentials to allow you to download image from repository. Please reach out to PDFTron for these keys.

```bash
> aws configure
AWS Access Key ID [****************xxx]: xxx
AWS Secret Access Key [****************xxx]: xxx
Default region name [us-east-1]: us-east-1
Default output format [json]: json
```

4. Login to AWS ECR:

`aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 448036597521.dkr.ecr.us-east-1.amazonaws.com`

5. Pull latest nightly experimental image:

`docker pull 448036597521.dkr.ecr.us-east-1.amazonaws.com/docjob-3d:nightly_experimental`

## Configuring Server

The 3D server supports both setting configuration through a `config` file and setting it directly
through environment variables. To set configuration through a config file take the following steps:

The configuration file is a JSON file with the following options:

- `license` - The server license key
- `temp_directory` - The temp directory to use for processing. Defaults to `./sys/tmp`
- `log_directory` - The log directory to use for server logs. Defaults to `./sys/logs`
- `data_directory` - The directory to store cached data in. Defaults to `./sys/data`
- `log_level`     - Sets the logging level. Accepts `DEBUG` `INFO` `TRACE` `WARN`
- `num_threads`    - The number of concurrent jobs to target. Defaults to number of CPUs detected minus 1.
- `bind_address`   - The server binding address. Defaults to `0.0.0.0`
- `port`          - The server port. Defaults to `8085`
- `max_cache_size`  - The maximum cache size before forcing cache deletion. Defaults to 90% of the available disk.
- `force_zero_cache`- Force cache to constantly be removed. Defaults to `false`
- `release_mode`   - Sets HTTP to release mode, defaults to `true`.
- `request_timeout` - Maximum time to wait for an HTTP request result in seconds. Defaults to `10` seconds.
- `job_timeout`     - Maximum time to wait for a job to complete . Defaults to `10` minutes.
- `use_https`       - If `true`, enables HTTPS and uses the HTTPSPort. Defaults to `false`
- `https_port`      - HTTPS port, defaults to `443`
- `https_cert_file`  - The HTTPS public certificate location.
- `https_key_file`   - The HTTPS private certificate location.
- `allowed_origins` - The origins allowed to access the server. Expects a string array `['test.com','pdftron.com']`
 
 A sample of what the json file should look like.
 ```
{
    "license": "my_license_key",
    "allowed_origins": ["test.com", "pdftron.com"],
    "request_timeout": 1
}
 ```

 To pass these arguments as environment variables, just append `trn_` onto their values. Like so:

```
export trn_license="MY_LICENSE_KEY"
export trn_allowed_origins="test.com,pdftron.com"
export trn_request_timeout=1
```

## Running Server

### Running with binary and configuration file

`./docjob-3d -c="myconfig.file"`

This will load the myconfig file.

### Running with Docker and configuration file

`docker run -p 8085:8085 -v /home/user/config:/home/docjob/config docjob-3d:latest`

This will mount the config file to the container into the path `/home/docjob/config` where it will be
loaded from.

### Running with Docker and environment variables

`docker run -p 8085:8085 -e trn_license="my_license_key" docjob-3d:latest`

This will run the container with the configuration variable `trn_license` defined.

### Troubleshooting

If `docjob-3d:latest` does not work for you, you can replace with the Docker image ID retrieved from `docker image ls`:

![docker-image-ls-result](https://user-images.githubusercontent.com/15149835/179813613-f59de431-41e9-4ede-914f-976f32029939.png)

## Testing the container

The easiest way to test the container is to submit a job against it. The following can be done with curl.

```
curl -X GET http://localhost:8085/v1/convert/3d/vsf -H "uri: https://foxystorage.blob.core.windows.net/ifctest/PlayersTheatre.ifc" 
curl -X GET http://localhost:8085/v1/results/{jid} --output out.vsf         
```

You can also test against the `/healthz` api to see if the HTTP server is functioning.

## Managing Docker 

It's important to maintain uptime when using a docker container. The best way to do this is with a container management tool such as `Portainer`, `Kubernetes`, `OpenShift`, `Docker`, `ECS` and much more.

The tool should watch the `/healthz` API to see if the server is up.

We also recommend running a regular test job against your server to ensure it's still operational.

## WebViewer BIM Server APIs

`GET /v1/3d/convert/vsf`
  - Header `uri`:the url of the ifc doc to get vsf from
  - Header `ext`:the extension of the source document if it cannot be determined from the URL
  - Header: `local`: if set to true, expects URI to be a locally uploaded doc
  - Returns `jid`: the job id of the result doc
    - `202`: Job was started

`GET /v1/3d/convert/properties`
  - Header `uri`:the url of the ifc doc to get props from   ``
  - Header `ext`:the extension of the source document if it cannot be determined from the URL
  - Header: `local`: if set to true, expects URI to be a locally uploaded doc
  - Returns `jid`: the job id of the result doc

`GET /test` - tests a random queue job

`GET /healthz` - checks server health

`POST /util/upload` - uploads a file for usage with other jobs
  - Expects multipart form data with `Filename` containing filename and data within `file`
  - returns source id `{"src": "source-id"}`

`GET /v1/results/{job-id}` - pass a `jid` from 3d to get a result
  Waits for the specified server timeout (default 30s) and returns the result for the ID.
  - Returns 
    - `404`: Not found, no job was found for requested result.
    - `460`: Requested job has failed during execution and no result exists.
    - `461`: Requested job has failed since the execution took longer than the job timeout and no result exists.
    - `408`: Timeout was reached, job has not completed during this time.
        - Set by `request_timeout` server timeout, defaults to 10s
    - `200`: Job is completed, returning result.
    - `102`: Processing, the job is still executing. Will eventually return one of the above status codes.
