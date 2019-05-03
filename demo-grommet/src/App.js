import React,{Component} from 'react';
import { Box, Button, Collapsible, Heading, Grommet } from 'grommet';
import { Notification } from 'grommet-icons';
const gravatar = require('gravatar')

const AppBar = (props) => (
    <Box
      tag='header'
      direction='row'
      align='center'
      justify='between'
      background='brand'
      pad={{ left: 'medium', right: 'small', vertical: 'small' }}
      elevation='medium'
      style={{ zIndex: '1' }}
      {...props}
    />
  );
const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '20px',
      height: '20px',
    },
  },
};

function App() {
  console.log(gravatar.url('59070088@it.kmitl.ac.th', {s: '100', r: 'pg', d: 'identicon'}, false)) 
  return (
    <Grommet theme={theme} full>
      <Box fill>
          <AppBar>
            <Heading level='3' margin='none'>My App</Heading>
            <Button icon={<Notification />} onClick={() => {}} />
          </AppBar>   
          <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
          <Box flex align='center' justify='center'>
              app body
          </Box>
        
            <Box
              flex
              width='medium'
              background='light-2'
              elevation='small'
              align='center'
            justify='center'
            >
              sidebar
            </Box>
          
        </Box>
      </Box>
    </Grommet>
   
  );
}

export default App;
