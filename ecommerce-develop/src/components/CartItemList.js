import React, { Component } from 'react'
import {Box} from 'grommet'
import {connect} from 'react-redux'

class CartItemList extends Component {
  render() {
    const cartItems = this.props.cartItems
    return (

      <div>
        
       
      </div>
    )
  }
}


const mapStateToProps = state => {
    return {
        cartItems : state.cart.cartItems
    }
}
export default connect(mapStateToProps, null)(CartItemList)

