const fs = require('fs-extra');
const { exec } = require("child_process")

const copyFiles = async () => {
  try {
    
    await fs.copy('./node_modules/@pdftron/webviewer/public', './public/webviewer/lib');
    await fs.copy('./node_modules/@pdftron/webviewer-bim-client/dist', './public/webviewer-bim/');
    console.log('WebViewer and WebViewer BIM files copied over successfully.');
  } catch (err) {
    console.error(err);
  }
};
exec('npm cache clear --force && cd ../WV3D-MVP && rm -rf dist && npm run build && npm pack && mv pdftron-webviewer-bim-client*.tgz ../startbim/1.tgz && cd ../startbim && rm -rf package && tar -xzvf 1.tgz && rm -rf ./node_modules/@pdftron/webviewer-bim-client && npm i @pdftron/webviewer-bim-client', (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('preparing resources...');
  copyFiles();
});

