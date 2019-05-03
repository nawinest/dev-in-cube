export const cart = {
    state: {
        cartItem : []
    }, // initial state
    reducers: {
      // handle state changes with pure functions
      
      addItem(state, payload) {
        const item = state.cartItems.find(o=> o.productId=== payload)
        if(item){
          const cartItems = state.cartItems.map(o=>{
            if(o.productId === payload){
              return {
                ...o,
                amount : o.amount +=1 
              }
            }
            return o
          })
          return{
            ...state,cartItems
          }
        }
       
        return {
          ...state, cartItem:[{
              productId : payload,
              amount : 1
            }],...state.cartItem
        }
      },
      deleteItem(state, payload) {
        return state
      }
    },
    effects: (dispatch) => ({
   
    })
}