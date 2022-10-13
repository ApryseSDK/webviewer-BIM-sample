# WebViewer BIM

WebViewer is a powerful JavaScript-based library that's part of the PDFTron SDK. It allows you to view and annotate various file formats (PDF, MS Office, images, videos) on your web app with a fully customizable UI.

This sample uses the BIM addon for WebViewer. It allows you to view, annotate, and collaborate on 3D models.

## Features

- Load models from your own servers without relying on the cloud.
- Navigate complex BIM models with the look and feel of the familiar Webviewer UI.
- Traverse the model tree and toggle visibility of objects.
- View model properties and rich metadata such as material and dimensional information.
- Annotate BIM models to track design issues.

![webviewer-bim-1-0-0](https://user-images.githubusercontent.com/15149835/178818619-700cd6ea-2671-45b0-b30c-5312e9b52b52.png)

## Architecture

There are two components to WebViewer BIM:

1. Server-side file conversion that supports 3D streaming to the client.
2. Client-side 3D viewer that renders BIM models and allows navigation entirely encapsulated in our familiar WebViewer UI.

## Demo

You can explore all of the functionality in our [live demo of Webviewer BIM](https://webviewer3d.web.app/).

# Running the sample

To get the sample working, both WebViewer BIM client and server must be setup and running. The server URL will be referenced in the front-end to allow communication between client and server.

## Setting up Webviewer BIM Server

The server comes packaged as either a binary or a Docker image available for Linux or Windows. For server setup, configuration, and API details please read the Webviewer BIM Server [README](SERVER_README.md).

The server is supported on Windows, Linux and MacOS Intel (M1 not supported).

### Prerequisites
- Server license key provided by PDFTron.
  - **Request a [trial license key](https://www.pdftron.com/form/trial-support/) to try for free.**
- Install [Docker](https://docs.docker.com/get-docker/).

### Setup server

- See [Setting up server](SERVER_README.md#setting-up-server) section to download and setup the server.
- See [Configuring server](SERVER_README.md#configuring-server) section to configure the server with provided license key.

### Run server

- See [Running server](SERVER_README.md#running-server) section to run the server.

### Server APIs

- See [Server APIs](SERVER_README.md#current-api) section for details on the WebViewer BIM Server APIs.

## Setting up Webviewer BIM Client

### Setup application

1. Run the following:
```
git clone https://github.com/XodoDocs/webviewer-BIM-sample.git
cd webviewer-BIM-sample
npm install
```

2. Change `serverURL` variable in `App.js` to wherever your server is hosted. See [Setting up WebViewer BIM Server](#setting-up-webviewer-bim-server) section for details.

### Run application

After setup is complete, run the application:

```js
npm start
```

## Usage

### initializeBimViewer(instance, serverURL, options)

Call `initializeBimViewer` within the promise resolve of WebViewer instance to initialize BIM viewer.
- `instance` - WebViewer instance that is available after initializing.
- `serverURL` - URL of WebViewer BIM server.
- `options` - Initialization options for WebViewer BIM.
	- `license` - WebViewer BIM license key.
	- `dataSchema` - Options to define schema of the properties panel.

Returns a promise that resolves to an object containing the functions needed to load models in WebViewer.

```js
import  Webviewer  from  '@pdftron/webviewer';
import { initializeBimViewer } from '@pdftron/webviewer/bim-client'

Webviewer({
  path: '/webviewer/lib',
}, document.getElementById('viewer')).then(instance  => {

  const  license = `---- Insert commercial license key here after purchase ----`;
  const  serverURL = `---- Insert server URL after setup ----`;
  const  options = {
    license: license,
    dataSchema: {
      headerName: 'Name',
      defaultValues: {
        Description: 'Description',
        GlobalID: 'GlobalId',
        Handle: 'handle',
        EmptyRow1: 'EmptyRow1',
      },
      groups: {
        Dimensions: {
          Length: 'Length',
          Width: 'Width',
          Height: 'Height',
          EmptyRow2: 'EmptyRow2',
          GrossFootprintArea: 'GrossFootprintArea',
          GrossSideArea: 'GrossSideArea',
          GrossVolume: 'GrossVolume',
        }
        EmptyGroupTest: {
            ObjectType: 'Lions',
            EmptyRow3: 'Tigers',
            ObjectPlacement: 'Bears',
        },
      },
      groupOrder: ['EmptyGroupTest', 'Dimensions'],
      removeEmptyRows: true,
      removeEmptyGroups: true,
      createMiscGroup: true,
    }
  };

  const WebViewerBIM = await initializeBimViewer(instance, serverURL, options);
}
```

### load3dAsset(pathToAsset)

Call `load3dAsset` after initializing the 3D viewer to load an IFC model.
- `pathToAsset` - URL or path to IFC model.

```js
const webviewerBIM = await initializeBimViewer(instance, serverURL, options);
webviewerBIM.File.load3dAsset('Add URL to your 3D asset here');
```

### unmountBimViewer()

Call `unmountBimViewer` to revert the WebViewer back and clear memory.

```js
import  Webviewer  from  '@pdftron/webviewer';
import { initializeBimViewer, unmountBimViewer } from '@pdftron/webviewer/bim-client'

Webviewer({
  path: '/webviewer/lib',
}, document.getElementById('viewer')).then(instance  => {
  const  license = `---- Insert commercial license key here after purchase ----`;
  const  serverURL = `---- Insert server URL after setup ----`;
  const  options = {
    license: license,
  }

  const webviewerBIM = await initializeBimViewer(instance, serverURL, options);
  webviewerBIM.File.load3dAsset(
    "Add URL to your 3D asset here"
  );
  // input your code here
  unmountBimViewer(instance)
}
```

### enableSSAO()

Call `enableSSAO` to enable Sub Surface Occulusion for the Viewer.

```js
const webviewerBIM = await initializeBimViewer(instance, serverURL, options);
webviewerBIM.Viewer.enableSSAO();
```

### disableSSAO()

Call `disableSSAO` to disable Sub Surface Occulusion for the Viewer.

```js
const webviewerBIM = await initializeBimViewer(instance, serverURL, options);
webviewerBIM.Viewer.disableSSAO();
```

### setSSAOOptions()

Call `setSSAOOptions` to adjust Sub Surface Occulusion for the Viewer.

```js
const webviewerBIM = await initializeBimViewer(instance, serverURL, options);
webviewerBIM.Viewer.setSSAOOptions({
 // example parameters：
 isDynamicRadius: true,
 radius: 1,
 loops: 64,
 blurRadius: 2,
 power: 1.4,
})
```

### enableAntiAliasing()

Call `enableAntiAliasing` to enable Anti Aliasing for the Viewer.

```js
const webviewerBIM = await initializeBimViewer(instance, serverURL, options);
webviewerBIM.Viewer.enableAntiAliasing();
```

### disableAntiAliasing()

Call `disableAntiAliasing` to disable Anti Aliasing for the Viewer.

```js
const webviewerBIM = await initializeBimViewer(instance, serverURL, options);
webviewerBIM.Viewer.disableAntiAliasing();
```

### setCameraSensitivity(number)

Call `setCameraSensitivity` to set the sensitivity for Orbit/Pan tool.
- `number` to set the sensitivity

```js
const tool = instance.docViewer.getToolMode()
tool.setCameraSensitivity(10)
```

### getCameraSensitivity()

Call `getCameraSensitivity` to get the sensitivity for Orbit/Pan tool.
Returns a value of Number

```js
const tool = instance.docViewer.getToolMode()
tool.getCameraSensitivity()
```

## Framework Agnostic Setup

This project sample uses React as the front-end framework, but you may wish to use (or not use) a different framework. This section shows how to setup the front-end agnostic of any framework:

### Prerequisites

It is recommended you install Node.js and NPM.

### NPM packages

- https://www.npmjs.com/package/@pdftron/webviewer
- https://www.npmjs.com/package/@pdftron/webviewer-bim-client

### Copying resources to public/ folder

There are several directories that need to be copied and served locally in your application.

There are two folders you need to copy: 
- node_modules/@pdftron/webviewer/public
- node_modules/@pdftron/webviewer-bim/dist

```
cp -R ./node_modules/@pdftron/webviewer/public public/webviewer/lib
cp -R ./node_modules/@pdftron/webviewer-bim/dist public/webviewer-bim
```

See [scripts/copy-webviewer-files.js](scripts/copy-webviewer-files.js) for a simple script to do this.

Afterwards the folder structure will look something like:

```
public/
  webviewer/
    lib/
      ui/
      core/
  webviewer-bim/
    compress/
    oda/
    webviewer-bim-min.js
```

### Sample code

```js
import  Webviewer  from  '@pdftron/webviewer';
import { initializeBimViewer } from '@pdftron/webivewer/bim-client'

Webviewer({
  path: '/webviewer/lib',
}, document.getElementById('viewer')).then(instance  => {

  const license = `---- Insert commercial license key here after purchase ----`;
  const serverURL = `---- Insert server URL after setup ----`;
  const options = { license: license };
  const WebViewerBIM = await initializeBimViewer(instance, serverURL, options);
  WebViewerBIM.File.load3dAsset('Add URL to your 3D asset here');

});
```

## Contributing

See [contributing](./CONTRIBUTING.md).

## License

See [license](./LICENSE).

-------
This project was generated with Create React App. Go to [Create React App documentation](https://reactjs.org/docs/create-a-new-react-app.html) for more information.