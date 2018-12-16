import React from "react";
import Allproducts from "./allProducts";
import Cart from "./cart";
import "../style/style.css";

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <h1 className="heading">Shopping Cart Application</h1>
                <div className="whole-cart">
                    <div className="all-products">
                        <Allproducts/>
                    </div>
                    <div className="cart">
                        <Cart/>
                    </div>
                </div>
            </div>

        );
    }
}
export default App;

