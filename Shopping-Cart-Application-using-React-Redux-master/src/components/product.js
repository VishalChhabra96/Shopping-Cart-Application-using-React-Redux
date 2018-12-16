import React from "react";

const Product = (props) => {
    return (
        <div className="item">
            <img src={props.product.image}/>
            <h3>{props.product.name}</h3>
            <h3>Price: Rs. {props.product.price}</h3>
            {
                props.product.quantity > 0 ?
                    <h3>In Stock: {props.product.quantity}</h3>
                    : <h3>Out of Stock!</h3>
            }
            {
                props.product.quantity > 0 ?
                    <button onClick={() => {
                        props.addToCart(props.product);
                        props.decreaseQuantity(props.product);
                    }
                    } className="button" type="button">
                        Add To Cart
                    </button>
                    : <button onClick={() => {
                        props.addToCart(props.product);
                        props.decreaseQuantity(props.product);
                    }
                    } className="button" type="button" disabled>
                        Add To Cart
                    </button>
            }
        </div>
    )
};
export default Product;