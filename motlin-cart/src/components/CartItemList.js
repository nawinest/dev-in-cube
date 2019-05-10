import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartItem from './CartItem';

class CartItemList extends Component {
    state = {}
    componentDidMount() {
        this.props.getCartList();
    }

    handleOnDelete = (id) => {
        console.log('was click')
        this.props.deleteItemInCart(id)
    }

    render() {
        console.log(this.props.cart.cartItem)
        const cleanData = this.props.cart.cartItem.map(item => {
            const {id, name , amount} = item
            return (
                <CartItem id={id} name={name} amount={amount} key={item.id}/>
            )
        })
        return (
            <div>
                {cleanData}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    cart: state.cart
})

const mapDispatchToProp = (dispatch) => ({
    getCartList: dispatch.cart.getCartList,
    deleteItemInCart : dispatch.cart.deleteItemInCart
})

export default connect(mapStateToProps, mapDispatchToProp)(CartItemList);