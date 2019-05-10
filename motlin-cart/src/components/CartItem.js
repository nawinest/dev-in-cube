import React, { Component } from 'react';
import {Box} from 'grommet'
import {connect} from 'react-redux'
class CartItem extends Component {
    state = {}

    handleOnDelete=()=>{
        this.props.deleteItemInCart(this.props.id)
    }
    render() {
        return (
            <Box direction="row" pad="small">
                <Box pad="small">
                    {this.props.name} x {this.props.amount}
                </Box>
                <button onClick={this.handleOnDelete}>ลบ</button>
            </Box>
        );
    }
}
const mapDispatchToProp = (dispatch) => ({
    deleteItemInCart : dispatch.cart.deleteItemInCart
})

export default connect(null,mapDispatchToProp)(CartItem)
