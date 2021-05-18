import {
    CART_ADD_ITEM_REQUEST, CART_ADD_ITEM_SUCCESS,
    CART_REMOVE_ITEM, INCREMENT_QTY, CHANGE_QTY, DECREMENT_QTY
} from "../constants/cartConstants";
import { findProductById } from "../services/ProductsAPI";

const addToCart = (productId, qty) => async dispatch => {
    try {
        debugger
        dispatch({ type: CART_ADD_ITEM_REQUEST });
        const { data } = await findProductById(productId);
        dispatch({
            type: CART_ADD_ITEM_SUCCESS, payload: { data: data, qty: qty }
        });
    } catch (error) {

    }
}
const removeFromCart = productId => dispatch => {
    dispatch({ type: CART_REMOVE_ITEM, payload: productId });
}

const incrementQty = productId => dispatch => {
    dispatch({ type: INCREMENT_QTY, payload: productId });
}

const decrementQty = productId => dispatch => {
    dispatch({ type: DECREMENT_QTY, payload: productId });
}

const changeQty = (productId, qty) => dispatch => {
    dispatch({ type: CHANGE_QTY, payload: { productId: productId, qty: qty } });
}

export { addToCart, removeFromCart, incrementQty, decrementQty, changeQty }