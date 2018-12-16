import React from "react";

const Cartitem = (props) => {
    return (
        <div className="item">
            <img src={props.cartitem.image}/>
            <h3>{props.cartitem.name}</h3>
            <h3>Price: Rs.{props.cartitem.price}</h3>
            {
                props.cartitem.quantity > 0 ?
                    <h3>Available Stock:{props.cartitem.quantity}</h3>
                    : <h3>Out of Stock!</h3>
            }
            <h3>Quantity: {props.cartitem.count}</h3>
            {
                props.cartitem.quantity > 0 ?
                    <button onClick={() => {
                        props.quantityInc(props.cartitem);
                        props.decreaseQuantity(props.cartitem);
                    }
                    } className="button" type="button">
                        QTY +
                    </button>
                    : <button onClick={() => {
                        props.quantityInc(props.cartitem);
                        props.decreaseQuantity(props.cartitem);
                    }
                    } className="button" type="button" disabled>
                        QTY +
                    </button>
            }
            {
                props.cartitem.count === 1 ? <button onClick={() => {
                    props.removeFromCart(props.cartitem);
                    props.increaseQuantity(props.cartitem);
                    }
                    } className="button" type="button">
                        Remove From Cart
                    </button>

                :   <button className="button" type="button" onClick={() => {
                        props.cartQuantityDecrease(props.cartitem);
                        props.increaseAvailableStock(props.cartitem);
                    }}>
                        QTY -
                    </button>
            }
            <br/>
            <hr/>
            {
                props.cartitem.count > 1 ?
                <button onClick={() => {
                    props.removeFromCart(props.cartitem);
                    props.increaseQuantity(props.cartitem);
                    }
                    } className="button" type="button">
                        Remove From Cart
                </button>
                : null
            }
            <h3>Total Rs. {props.cartitem.price * props.cartitem.count}</h3>
        </div>
    )
};
export default Cartitem;
