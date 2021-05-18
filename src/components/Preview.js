import React from "react";
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";

import { Badge, Card, Button } from 'react-bootstrap';
import CartItem from "../components/CartItem";

const Preview = (props) => {
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;
    const history = useHistory();

    const handleOrder = (e) => {
        debugger
        e.preventDefault();
        history.push("/");
    }

    return (
        <Card>
            <Card.Header as="h5" className="bg-dark text-light">
                Cart Details
            </Card.Header>
            <Card.Body>
                {
                    cartItems.length === 0 ?
                        <div>
                            Cart is empty
                            </div>
                        :
                        cartItems.map(item => <CartItem key={item.itemId} cartItem={item} />)
                }
            </Card.Body>
            <Card.Footer>
                <div className="float-right">
                    Total price:&nbsp;
                        <Badge variant="secondary" style={{ fontSize: 20 }}>
                        {
                            cartItems.reduce((total, cartItem) => {
                                return total + (cartItem.product.price * cartItem.qty);
                            }, 0)
                        } $
                        </Badge>
                    {
                        cartItems.length !== 0 &&
                        <Button
                            onClick={handleOrder}
                            variant="success"
                            style={{ marginLeft: '5px' }}>
                            Proceed to Payment
                        </Button>
                    }
                </div>
            </Card.Footer>
        </Card>
    );
}

export default Preview;