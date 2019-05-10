import React from 'react'
import { Box, Heading, Button } from 'grommet';
import ShoppingCartButton from './ShoppingCartButton';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import store from '../redux'

class AppBar extends React.Component {
  render() {
    const isAuthenticate = this.props.isAuthenticate
    return (
      <div>
        <Box
          tag='header'
          direction='row'
          align='center'
          justify='between'
          background='brand'
          pad={{
            left: 'medium',
            right: 'medium',
            vertical: 'small'
          }}
          elevation='medium'
          style={{ zIndex: '1' }}
        >
          <Heading
            level="4"
            margin="xsmall"
          >
            Devincube store
        </Heading>
          <Box direction="row">
            <ShoppingCartButton />
            {!isAuthenticate && <Button label="login" onClick={() => this.props.history.push('/login')}></Button>}
            {isAuthenticate && <Button label="logout" onClick={() => this.props.logout()}></Button>}
            {
              isAuthenticate && <Button label="My profile" onClick={() => this.props.history.push('/profile')} />
            }
          </Box>
        </Box>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticate: store.select.user.isAuthenticate(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: dispatch.user.login,
    logout: dispatch.user.logout
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AppBar))
