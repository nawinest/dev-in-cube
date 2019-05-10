import request from '../../utils/request'

export const cart = {
    state: {
        cartItem: [
            //name,quantity
        ]
    }, // initial state
    reducers: {
        // handle state changes with pure functions
        increment(state, payload) {
            const newproduct = state.product_in_cart.push(payload)
            return {
                ...state, product_in_cart: newproduct
            }
        },
        setCartItems(state, payload) {
            return {
                ...state,
                cartItem: payload
            }
        },
    },
    effects: (dispatch) => ({
        async getCartList() {
            const res = await request.get('/carts/123456/items')
            const cleanData = res.data.data.map((item) => {
                return {
                    id: item.id,
                    productId: item.product_id,
                    amount: item.quantity,
                    name: item.name,
                    image: 'https://via.placeholder.com/300x400.png',
                    totalPrice: item.meta.display_price.with_tax.value.formatted,
                    unitPrice: item.meta.display_price.with_tax.unit.formatted
                }
            })
            dispatch.cart.setCartItems(cleanData)
        },
        async addCartItems(id) {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                }
            }
            const data = {
                "data": {
                    "type": "cart_item",
                    "id": id,
                    "quantity": 1,
                }
            }
            try {
                await request.post('/carts/123456/items', data, config)
            } catch (e) {
                console.log(e)
            }
            dispatch.cart.getCartList();
        },
        async deleteItemInCart(id){
            await request.delete(`carts/123456/items/${id}`);
            dispatch.cart.getCartList()
        }

    })
}