import React, { useState } from 'react';
import { useDispatch } from "react-redux";

import { shortenDesc } from "../util/shortenDesc";

import { Alert, Modal, Button } from "react-bootstrap";
import {
    removeFromCart, incrementQty, decrementQty, changeQty
} from "../actions/cartActions";

const CartItem = (props) => {

    const dispatch = useDispatch();
    const [show, setShow] = useState(false);

    const removeItem = () => {
        if (show) {
            setShow(false);
        }
        dispatch(removeFromCart(props.cartItem.product.id))
    }

    const handleIncrementQty = () => {
        dispatch(incrementQty(props.cartItem.product.id))
    }

    const handleDecrementQty = () => {
        if (props.cartItem.qty <= 1) {
            setShow(true);
            return;
        }
        dispatch(decrementQty(props.cartItem.product.id))
    }

    const handleQuantityChange = (e) => {
        dispatch(changeQty(props.cartItem.product.id, e.target.value))
    }

    return (
        <div className="row align-items-center mb-3">
            <div className="col-12 col-sm-12 col-md-2 text-center">
                <img className="img-responsive" src={props.cartItem.product.images && props.cartItem.product.images[0]} style={{ height: '60%', width: '60%' }} alt={props.cartItem.product.description} />
            </div>
            <div className="col-12 text-sm-center col-sm-12 text-md-left col-md-6">
                <h4 className="product-name"><strong>{shortenDesc(props.cartItem.product.description)}</strong></h4>
                <h4>
                    <small className="product-description">{props.cartItem.product.description}</small>
                </h4>
            </div>
            <div className="col-12 col-sm-12 text-sm-center col-md-4 text-md-right row product-quantity-container align-items-center">
                <div className="col-6 col-sm-6 col-md-6 text-md-right" style={{ paddingTop: '5px' }}>
                    <h6><strong>{props.cartItem.product.price}$ <span className="text-muted">x</span></strong></h6>
                </div>
                <div className="col-4 col-sm-4 col-md-4">
                    <div className="quantity">
                        <input
                            onClick={handleIncrementQty}
                            type="button" value="+" />
                        <input
                            onChange={handleQuantityChange}
                            type="number" step="1" max="10" min="1"
                            value={props.cartItem.qty} title="Qty"
                            size="4" />
                        <input
                            onClick={handleDecrementQty}
                            type="button" value="-" />
                    </div>
                </div>
                <div className="col-2 col-sm-2 col-md-2 text-right">
                    <button
                        onClick={removeItem}
                        type="button" className="btn btn-outline-danger btn-xs">
                        <i className="bi bi-trash-fill" />
                    </button>
                </div>
            </div>
            <Modal show={show} onHide={() => setShow(false)} size="sm">
                <Modal.Header closeButton>
                    <Modal.Title>Cart Item Quantity Less Than 1</Modal.Title>
                </Modal.Header>
                <Modal.Body>Cart Item Quantity cannot be less than 1, Please remove the item if you dont want to buy the item</Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={removeItem}>
                        Delete Item
                    </Button>
                    <Button variant="secondary" onClick={() => setShow(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default CartItem;