import React from 'react';
import {
  ChakraProvider,
  extendTheme,
  useClipboard,
  Flex,
  Input,
  Button,
  Editable,
  EditablePreview,
  EditableInput,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from '@chakra-ui/react';

function ChakraUI() {
  const [value, setValue] = React.useState('Hello world');
  const { hasCopied, onCopy } = useClipboard(value);

  const theme = extendTheme({
    colors: {
      primary: {
        100: '#f7fafc',
        200: '#A7ABFB',
        300: '#8388F9',
      },
    },
  });

  return (
    <div
      style={{ margin: '100px 0', padding: '50px', border: '3px solid #000' }}
    >
      <h2
        style={{ marginBottom: '30px', fontSize: '30px', fontWeight: 'bold' }}
      >
        [Chakra UI]
      </h2>

      <ChakraProvider theme={theme}>
        <Flex mb={2}>
          <Input value={value} isReadOnly placeholder="Welcome" />
          <Button onClick={onCopy} ml={2}>
            {hasCopied ? 'Copied' : 'Copy'}
          </Button>
        </Flex>
        <Editable placeholder="Paste here">
          <EditablePreview width="100%" />
          <EditableInput />
        </Editable>

        <Tabs style={{ marginTop: '30px' }}>
          <TabList style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <Tab>Menu1</Tab>
            <Tab>Menu2</Tab>
            <Tab>Menu3</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <p>content1</p>
            </TabPanel>
            <TabPanel bg="primary.300">
              <p>content2</p>
            </TabPanel>
            <TabPanel>
              <p>content3</p>
            </TabPanel>
          </TabPanels>
        </Tabs>

        <div style={{ marginTop: '30px', display: 'flex' }}>
          <Input placeholder="Basic usage" style={{ width: '200px' }} />
          <Button colorScheme="blue">Button</Button>
        </div>
      </ChakraProvider>
    </div>
  );
}

export default ChakraUI;
