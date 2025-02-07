// import React from 'react'

// const CartContext = React.createContext({
//   cartList: [],
//   removeAllCartItems: () => {},
//   addCartItem: () => {},
//   removeCartItem: () => {},
//   incrementCartItemQuantity: () => {},
//   decrementCartItemQuantity: () => {},
// })

// export default CartContext

import React from 'react'

const CartContext = React.createContext({
  cartList: [],
  removeAllCartItems: () => { },
  addCartItem: () => { },
  // removeCartItem: () => {},
  removeAllCartItems: () => {
    setCartList([])
  },
  // incrementCartItemQuantity: () => {},
  incrementCartItemQuantity: id => {
    setCartList(prevCartList =>
      prevCartList.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    )
  },
  // decrementCartItemQuantity: () => {},
  decrementCartItemQuantity: id => {
    setCartList(prevCartList =>
      prevCartList.map(item =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
    )
  },
},




)




export default CartContext
