import React, { useState } from 'react';
import { Button, InputNumber, Space } from 'antd';

import MainScene from './main';

const App = (props: { mainScene: MainScene }) => {
  const [x, setX] = useState(500);
  const [y, setY] = useState(500);
  return (
    <Space>
      <InputNumber defaultValue={x} onChange={(val) => setX(val)} max={2000} min={0}></InputNumber>
      <InputNumber defaultValue={y} onChange={(val) => setY(val)} max={2000} min={0}></InputNumber>
      <Button
        onClick={() => {
          props.mainScene.fire(x, y);
        }}
      >
        Fire!
      </Button>
      <Button
        onClick={() => {
          props.mainScene.reset();
        }}
      >
        Reset
      </Button>
    </Space>
  );
};

export default App;
