import React from 'react';
import Default from './default/Default';
import MaterialUI from './material-ui/MaterialUI';
import Antd from './ant-design/Antd';
import ChakraUI from './chakra-ui/ChakraUI';
import ReactBootstrap from './react-bootstrap/ReactBootstrap';
import Reactstrap from './reactstrap/Reactstrap';

function App() {
  return (
    <div style={{ width: '70%', margin: '100px auto' }}>
      <Default />
      <MaterialUI />
      <Antd />
      <ChakraUI />
      <ReactBootstrap />
      <Reactstrap />
    </div>
  );
}

export default App;
