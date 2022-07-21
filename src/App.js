import { useRef, useEffect } from 'react';
import WebViewer from '@pdftron/webviewer';
import { initialize3dViewer } from '@pdftron/webviewer-bim-client';

import './App.css';

function App() {
  const viewer = useRef(null);

  useEffect(() => {
    WebViewer(
      { path: '/webviewer/lib' },
      viewer.current,
    ).then(async instance => {

      const license = `---- Insert commercial license key here after purchase ----`;
      const serverURL = `---- Insert server URL after setup ----`;

      const options = getViewerOptions(license);
      const webviewerBIM = await initialize3dViewer(instance, serverURL, options);
      webviewerBIM.viewer.loadAsset('https://foxystorage.blob.core.windows.net/ifctest/drayton.ifc');
    });
  }, []);

  function getViewerOptions(license) {
    return {
      license,
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
          },
          ExampleGroup01: {
            ObjectType: 'ObjectType',
            EmptyRow3: 'EmptyRow3',
            ObjectPlacement: 'ObjectPlacement',
          },
          EmptyGroupTest: {
            ObjectType: 'Elephants',
            EmptyRow3: 'Tigers',
            ObjectPlacement: 'Bears',
          },
        },
        groupOrder: ['RandomStuff', 'Zoo', 'Dimensions'],
        removeEmptyRows: true,
        removeEmptyGroups: true,
        createMiscGroup: true,
      }
    };
  }

  return (
    <div className="webviewer-bim-container">
      <div className="webviewer" ref={viewer} style={{height: "100vh"}}></div>
    </div>
  );
}

export default App;