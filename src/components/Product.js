import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from "react-router-dom";
import { Card, Button, Badge, Form, Col } from "react-bootstrap";

import { shortenDesc } from "../util/shortenDesc";

import { addToCart } from "../actions/cartActions";

const Product = (props) => {
    const {
        price,
        images,
        description,
        id,
    } = props.product;

    const dispatch = useDispatch();

    const [qty, setQty] = useState(1);

    const handleAddToCart = () => {
        debugger
        dispatch(addToCart(id, +qty))
    }

    return (
        <Card className="h-100 align-items-center" border="secondary">
            <Link to={"/products/" + id}>
                <Card.Header>
                    <Card.Img variant="top" src={images[0]} style={{ width: 200, height: 200 }} />
                </Card.Header>
                <Card.Body>
                    <Card.Subtitle>{shortenDesc(description)}</Card.Subtitle>
                    <Badge variant="secondary">${price}</Badge>
                </Card.Body>
            </Link>
            <Card.Footer >
                <Form.Row>
                    <Col xs="auto">
                        <Form.Label>Qty:</Form.Label>
                    </Col>
                    <Col xs="auto">
                        <Form.Control as="select" custom onChange={(e) => setQty(e.target.value)}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
                    </Col>
                    <Col xs="auto">
                        <Button variant="success" className="text-uppercase" size="sm" onClick={handleAddToCart}>
                            <i className="bi bi-cart-plus" style={{ fontSize: 20 }}></i>
                        </Button>
                    </Col>
                </Form.Row>
            </Card.Footer>
        </Card >
    );

}

export default Product;