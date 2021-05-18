import {
    CART_ADD_ITEM_REQUEST,
    CART_ADD_ITEM_SUCCESS,
    CART_REMOVE_ITEM,
    CHANGE_QTY,
    DECREMENT_QTY,
    INCREMENT_QTY,
} from "../constants/cartConstants";

import Cookies from "js-cookie";

function cartReducer(state = { cartItems: [] }, action) {
    switch (action.type) {
        case CART_ADD_ITEM_REQUEST:
            debugger;
            return { added: true, cartItems: state.cartItems };
        case CART_ADD_ITEM_SUCCESS:
            debugger;
            const item = action.payload.data;
            const qty = action.payload.qty;

            let cartItem = state.cartItems.find((x) => x.product.id === item.id);
            if (cartItem) {
                debugger;
                qty ? (cartItem.qty += qty) : cartItem.qty++;
                state = {
                    added: false,
                    cartItems: state.cartItems.map((x) =>
                        x.itemId === cartItem.itemId ? cartItem : x
                    ),
                };
                Cookies.set("cartItems", JSON.stringify(state.cartItems));
                return state;
            }

            let itemId = state.cartItems
                ? state.cartItems.reduce(
                    (max, item) => (item.itemId > max ? item.itemId : max),
                    state.cartItems[0] ? state.cartItems[0].itemId : 0
                )
                : 0;

            cartItem = {
                itemId: ++itemId,
                product: item,
                qty: qty ? qty : 1,
            };

            state = { added: false, cartItems: [...state.cartItems, cartItem] };
            Cookies.set("cartItems", JSON.stringify(state.cartItems), { expires: 7 });
            return state;
        case CART_REMOVE_ITEM:
            state = {
                cartItems: state.cartItems.filter(
                    (x) => x.product.id !== action.payload
                )
            };
            Cookies.set("cartItems", JSON.stringify(state.cartItems), { expires: 7 });
            return state;
        case INCREMENT_QTY:
            state = {
                cartItems: state.cartItems.map(cartItem => {
                    if (cartItem.product.id === action.payload) {
                        cartItem.qty++;
                        return cartItem;
                    } else {
                        return cartItem;
                    }
                })
            };
            Cookies.set("cartItems", JSON.stringify(state.cartItems), { expires: 7 });
            return state;
        case DECREMENT_QTY:
            state = {
                cartItems: state.cartItems.map(cartItem => {
                    if (cartItem.product.id === action.payload) {
                        cartItem.qty--;
                        return cartItem;
                    } else {
                        return cartItem;
                    }
                })
            };
            Cookies.set("cartItems", JSON.stringify(state.cartItems), { expires: 7 });
            return state;
        case CHANGE_QTY:
            state = {
                cartItems: state.cartItems.map(cartItem => {
                    if (cartItem.product.id === action.payload.productId) {
                        cartItem.qty = action.payload.qty;
                        return cartItem;
                    } else {
                        return cartItem;
                    }
                })
            };
            Cookies.set("cartItems", JSON.stringify(state.cartItems), { expires: 7 });
            return state;
        default:
            return state;
    }
}

export { cartReducer };
