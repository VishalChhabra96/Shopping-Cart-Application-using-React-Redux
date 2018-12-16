import React from "react";
import connect from "react-redux/es/connect/connect";
import Cartitem from "./cartItem";

const Cart = (props) => {
    var grand_total = 0;
    return (
        <div>
            <h1>My Cart</h1>
            <div className="all-items">
                {
                    props.cart.map((cartitem) => <Cartitem cartitem={cartitem}
                                                           removeFromCart={props.removeFromCart}
                                                           increaseQuantity={props.increaseQuantity}
                                                           key={cartitem.id}
                                                           quantityInc={props.addToCart}
                                                           decreaseQuantity={props.decreaseQuantity}
                                                           cartQuantityDecrease={props.cartQuantityDecrease}
                                                           increaseAvailableStock={props.increaseAvailableStock}
                    />)
                }
                {
                    props.cart.map((cartitem) => {
                        {
                            grand_total += (cartitem.count * cartitem.price)
                        }
                    })
                }
            </div>
            {
                props.cart.length > 0 ?
                    <div>
                        <h2>Grand Total: Rs.{grand_total}</h2>
                        <button type="button" className="button">Proceed To Pay!</button>
                    </div>
                    : <h2>Add Items To The Cart!</h2>
            }
        </div>
    )
};
const mapStateToProps = (state) => {
    return ({
            cart: state.cart,
            products: state.products,
        }
    )
};
const mapDispatchToProps = (dispatch) => {
    return ({
        removeFromCart: (item) => {
            dispatch({type: "REMOVE_FROM_CART", payload: item})
        },
        increaseQuantity: (item) => {
            dispatch({type: "INC", payload: item})
        },
        addToCart: (item) => {
            dispatch({type: "ADD_TO_CART", payload: item})
        },
        decreaseQuantity: (item) => {
            dispatch({type: "DEC", payload: item})
        },
        cartQuantityDecrease: (item) => {
            dispatch({type: "CART_QUANTITY_DECREASE", payload: item})
        },
        increaseAvailableStock: (item) => {
            dispatch({type: "INCREASE_AVAILABLE_STOCK", payload: item})
        }
    })
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);