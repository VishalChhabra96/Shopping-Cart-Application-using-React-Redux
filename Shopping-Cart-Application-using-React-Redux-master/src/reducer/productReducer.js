import PRODUCTS from "../constants/index";

const productReducer = (state = PRODUCTS, action) => {
    switch (action.type) {
        case "DEC": {
            action.payload.quantity = --action.payload.quantity;
            return [...state]
        }
        case "INC": {
            action.payload.quantity = action.payload.quantity + action.payload.count;
            return [...state]
        }
        case "INCREASE_AVAILABLE_STOCK": {
            action.payload.quantity = ++action.payload.quantity;
            return [...state]
        }
        default: {
            return state;
        }
    }
};
export default productReducer;