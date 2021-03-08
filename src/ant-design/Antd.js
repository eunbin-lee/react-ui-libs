import React, { useState } from 'react';
import { Menu, Input, Button } from 'antd';
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from '@ant-design/icons';

function Antd() {
  const { SubMenu } = Menu;
  const [current, setCurrent] = useState('mail');

  const onClick = (e) => {
    setCurrent({ current: e.key });
  };

  return (
    <div
      style={{ margin: '100px 0', padding: '50px', border: '3px solid #000' }}
    >
      <h2
        style={{ marginBottom: '30px', fontSize: '30px', fontWeight: 'bold' }}
      >
        [Ant Design]
      </h2>

      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        style={{ display: 'flex', justifyContent: 'space-evenly' }}
      >
        <Menu.Item key="mail" icon={<MailOutlined />}>
          Menu1
        </Menu.Item>
        <Menu.Item key="app" icon={<AppstoreOutlined />}>
          Menu2
        </Menu.Item>
        <SubMenu
          key="SubMenu"
          icon={<SettingOutlined />}
          title="Menu3 - Submenu"
        >
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item key="alipay">
          <a href="#" target="_blank" rel="noopener noreferrer">
            Menu4 - Link
          </a>
        </Menu.Item>
      </Menu>

      <div style={{ margin: '30px 0' }}>
        <Input placeholder="Basic usage" style={{ width: '200px' }} />
        <Button type="primary">Button</Button>
        <Button type="link">Link Button</Button>
      </div>
    </div>
  );
}

export default Antd;
