import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import store from '../redux'
class PrivateRoute extends Component {

  render() {
    const {
      isAuthenticate,
      component: MyComponent,
      ...rest
    } = this.props;
    return (
      <Route {...rest} render={(props) =>
        isAuthenticate ? <MyComponent {...props}/> : <Redirect to="/login"/> }/>
    )
  }
}
const mapStateToProps = state => {
    return {
      isAuthenticate: store.select.user.isAuthenticate(state)
    }
}
export default connect(mapStateToProps)(PrivateRoute)
