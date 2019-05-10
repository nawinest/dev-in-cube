import React, { Component } from 'react';
import {connect} from 'react-redux'
class Checkout extends Component {
    state = {  }
    componentDidMount(){
        this.props.getCartItems()
    }
    render() { 
        console.log(this.props.cart.cartItem)
        return ( <div>ssssss</div> );
    }
}

const mapStateToProps = (state) => ({
    cart : state.cart
})

const mapDispatchToProp = (dispatch) => ({
    getCartItems:dispatch.cart.getCartAsync
})
 
export default connect(mapStateToProps, mapDispatchToProp)(Checkout);