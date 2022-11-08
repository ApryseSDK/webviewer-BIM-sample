const fs = require('fs-extra');
const { exec } = require("child_process")

const copyFiles = async () => {
  try {
    await fs.copy('./WV3D-MVP/package/dist', './node_modules/@pdftron/webviewer-bim-client/dist');

    await fs.copy('./node_modules/@pdftron/webviewer/public', './public/webviewer/lib');
    await fs.copy('./node_modules/@pdftron/webviewer-bim-client/dist', './public/webviewer-bim/');
    console.log('WebViewer and WebViewer BIM files copied over successfully.');
  } catch (err) {
    console.error(err);
  }
};
exec('cd WV3D-MVP && npm run build && cd ..', (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('preparing resources...');
  copyFiles();
});

