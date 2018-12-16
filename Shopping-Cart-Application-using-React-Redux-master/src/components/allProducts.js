import React from "react";
import Product from "./product";
import connect from "react-redux/es/connect/connect";

const Allproducts = (props) => {
    return (
        <div>
            <h1>Products</h1>
            <div className="all-items">
                {
                    props.products.map((product) => <Product addToCart={props.addToCart}
                                                             decreaseQuantity={props.decreaseQuantity}
                                                             product={product}
                                                             key={product.id}/>)
                }
            </div>
        </div>
    )
};


const mapStateToProps = (state) => {
    return ({
            products: state.products,
        }
    )
};
const mapDispatchToProps = (dispatch) => {
    return ({
        addToCart: (item) => {
            dispatch({type: "ADD_TO_CART", payload: item})
        },
        decreaseQuantity: (item) => {
            dispatch({type: "DEC", payload: item})
        }
    })
};
export default connect(mapStateToProps, mapDispatchToProps)(Allproducts);
