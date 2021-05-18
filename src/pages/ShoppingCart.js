import React from "react";
import { useSelector } from 'react-redux';

import { Container, Card, Badge, Button } from 'react-bootstrap';
import CartItem from "../components/CartItem";

const ShoppingCart = (props) => {
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

    const handleCheckout = () => {
        debugger
        props.history.push("/checkout");
    }

    return (
        <Container fluid="md">
            <Card>
                <Card.Header className="bg-dark text-light">
                    <i className="bi bi-cart-fill" aria-hidden="true"></i>
                    Shopping cart
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
                                onClick={handleCheckout}
                                variant="success" size="lg"
                                className="text-uppercase"
                                style={{ marginLeft: '5px' }}>
                                Place Order
                            </Button>
                        }
                    </div>
                </Card.Footer>
            </Card>
        </Container>
    );
}

export default ShoppingCart;