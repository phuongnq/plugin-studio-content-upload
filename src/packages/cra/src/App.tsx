import * as React from 'react';
import { CrafterCMSNextBridge } from '@craftercms/studio-ui';
import { default as descriptor, OpenContentUploadPanelButton } from 'contentupload-components';
import { registerPlugin } from '@craftercms/studio-ui/services/plugin';
import { useLayoutEffect } from 'react';

function App() {
  useLayoutEffect(() => {
    registerPlugin(descriptor, { name: '', site: '', type: '' });
  }, []);
  return (
    <CrafterCMSNextBridge>
      <OpenContentUploadPanelButton />
    </CrafterCMSNextBridge>
  );
}

export default App;
