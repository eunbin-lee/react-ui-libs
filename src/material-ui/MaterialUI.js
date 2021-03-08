import React from 'react';
import {
  Button,
  List,
  ListItem,
  ListItemText,
  TextField,
} from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';

function MaterialUI() {
  return (
    <div
      style={{ margin: '100px 0', padding: '50px', border: '3px solid #000' }}
    >
      <h2
        style={{ marginBottom: '30px', fontSize: '30px', fontWeight: 'bold' }}
      >
        [Meterial UI]
      </h2>

      <div>
        <List
          component="nav"
          aria-label="mailbox folders"
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
          }}
        >
          <ListItem button divider>
            <ListItemText primary="Menu1" style={{ textAlign: 'center' }} />
          </ListItem>
          <ListItem button divider>
            <ListItemText primary="Menu2" style={{ textAlign: 'center' }} />
          </ListItem>
          <ListItem button divider>
            <ListItemText primary="Menu3" style={{ textAlign: 'center' }} />
          </ListItem>
          <ListItem button divider>
            <ListItemText primary="Menu4" style={{ textAlign: 'center' }} />
          </ListItem>
        </List>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          margin: '30px 0',
        }}
      >
        <TextField id="standard-basic" label="Standard" />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />

        <Button startIcon={<CheckIcon />}>Button</Button>
        <Button href="#">Link Button</Button>
      </div>
    </div>
  );
}

export default MaterialUI;
