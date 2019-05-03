import React, { Component } from 'react'
import { DropButton, Box, Stack } from 'grommet';
import { Shop } from 'grommet-icons'
import {connect} from 'react-redux'
import CartItemList from './CartItemList'
class ShoppingCartButton extends Component {
  render() {

    // const {cartLenght}  = this.props.cart.cartLenght
    return (
      <DropButton
        dropAlign={{
          top: 'bottom',
          right: 'right'
        }}
        dropContent={
          <Box>
            <CartItemList />
          </Box>
        }
      >
        <Stack
          anchor="top-right"
        >
          <Box pad='xsmall'>
            <Shop size="32px"/>
          </Box>
          <Box
            background="accent-1"
            pad={{horizontal: 'xsmall'}}
            round
          >
            {0}
          </Box>
        </Stack>
      </DropButton>
    )
  }
}

const mapStateToProps = state => ({
  cart :state.cart
})

export default connect()(ShoppingCartButton)