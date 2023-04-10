import { useRef, useEffect } from 'react';
import WebViewer from '@pdftron/webviewer';
import { initializeBimViewer, preload3dAsset } from '@pdftron/webviewer-bim-client';

import './App.css';

function App() {
  const viewer = useRef(null);
  useEffect(() => {
    WebViewer(
      { path: '/webviewer/lib' },
      viewer.current,
    ).then(async instance => {
      const license = ``;
      const serverURL = `https://d3d1.pdftron.com`;
      // const serverURL = `http://localhost:8085`;
      const options = getViewerOptions(license);
      instance.Core.documentViewer.addEventListener('BIMViewerReady', async (webviewerBIM)=>{
        console.log('Event BIMViewerReady ---')
        
        webviewerBIM.File.load3dAsset('https://foxystorage.blob.core.windows.net/ifctest/drayton.ifc')
        window.BIMInstance = webviewerBIM;
        instance.iframeWindow.BIMInstance = webviewerBIM;

      })
      await initializeBimViewer(instance, serverURL, options);
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
      },
      debugMode: true
    };
  }

  return (
    <div className="webviewer-bim-container">
      <div className="webviewer" ref={viewer} style={{height: "100vh"}}></div>
    </div>
  );
}

export default App;