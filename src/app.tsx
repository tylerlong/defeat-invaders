import React from 'react';
import { Button } from 'antd';

import MainScene from './main';

const App = (props: { mainScene: MainScene }) => {
  return (
    <Button
      onClick={() => {
        props.mainScene.fire();
      }}
    >
      Fire
    </Button>
  );
};

export default App;
