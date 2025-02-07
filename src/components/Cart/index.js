// import Header from '../Header'
// import CartListView from '../CartListView'

// import CartContext from '../../context/CartContext'
// import EmptyCartView from '../EmptyCartView'

// import './index.css'

// const Cart = () => (
//   <CartContext.Consumer>
//     {value => {
//       const {cartList} = value
//       const showEmptyView = cartList.length === 0
//       // TODO: Update the functionality to remove all the items in the cart

//       return (
//         <>
//           <Header />
//           <div className="cart-container">
//             {showEmptyView ? (
//               <EmptyCartView />
//             ) : (
//               <div className="cart-content-container">
//                 <h1 className="cart-heading">My Cart</h1>
//                 <CartListView />
//                 {/* TODO: Add your code for Cart Summary here */}
//               </div>
//             )}
//           </div>
//         </>
//       )
//     }}
//   </CartContext.Consumer>
// )
// export default Cart



import Header from '../Header'
import CartListView from '../CartListView'
import CartContext from '../../context/CartContext'
import EmptyCartView from '../EmptyCartView'

import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const { cartList, removeAllCartItems } = value
      const showEmptyView = cartList.length === 0

      const totalPrice = cartList.reduce((total, item) => total + item.price * item.quantity, 0)

      return (
        <>
          <Header />
          <div className="cart-container">
            {showEmptyView ? (
              <EmptyCartView />
            ) : (
              <div className="cart-content-container">
                <h1 className="cart-heading">My Cart</h1>
                <CartListView />
                <hr className="cart-summary-separator" />
                <div className="cart-summary">
                  <h2 className="cart-total-heading">Total Amount:</h2>
                  <p className="cart-total-price-summary">Rs {totalPrice}/-</p>
                </div>
                <button className="remove-all-button" type="button" onClick={removeAllCartItems}>
                  Remove All
                </button>
              </div>
            )}
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default Cart
