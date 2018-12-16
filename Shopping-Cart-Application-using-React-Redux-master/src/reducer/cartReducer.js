const cartReducer = (state = [], action) => {
    let flag = 0;
    if (action.type === "ADD_TO_CART") {
        if (state.length === 0) {
            action.payload.count = 1;
            return [...state, action.payload];
        }
        else if (state.length !== 0) {
            state.map((cartitem) => {
                if (action.payload.id === cartitem.id) {
                    flag = 1;
                }
            });
            if (flag === 1) {
                action.payload.count++;
                return [...state];
            }
            if (flag === 0) {
                action.payload.count = 1;
                return [...state, action.payload];
            }
        }
    }

    else if (action.type === "REMOVE_FROM_CART") {
        const firstMatchIndex = state.indexOf(action.payload);
        return state.filter((item, index) => index !== firstMatchIndex);
    }

    else if (action.type === "CART_QUANTITY_DECREASE") {
        action.payload.count = --action.payload.count;
        return [...state];
    }

    else {
        return state;
    }
};
export default cartReducer;