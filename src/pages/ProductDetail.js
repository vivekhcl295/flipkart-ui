import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Col, Container, Row, Spinner, Image, Button, Card, Badge, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";

import { detailsProduct } from "../actions/productActions";
import { addToCart } from "../actions/cartActions";

import { shortenDesc } from "../util/shortenDesc";

const ProductDetail = (props) => {
    const productDetails = useSelector((state) => state.productDetails);
    const { product, loading, error } = productDetails;
    const [qty, setQty] = useState(1);

    const dispatch = useDispatch();

    const { id } = useParams();

    useEffect(() => {
        dispatch(detailsProduct(id));
    }, [dispatch, id]);

    const handleAddToCart = () => {
        dispatch(addToCart(id, qty))
        props.history.push("/cart")
    }

    return (
        <Container>
            {
                loading && <Spinner animation="border" size="xl" />
            }
            {
                product &&
                <Row>
                    <Col sm={4} style={{ paddingLeft: 120, paddingTop: 50 }}>
                        <Image src={product.images && product.images[0]} alt={product.description} thumbnail />
                    </Col>
                    <Col sm={8}>
                        <Card.Body className="">
                            <p className="mb-3 h2">{shortenDesc(product.description)}</p>

                            <p>
                                <Badge variant="info" style={{ fontSize: 24 }}>${product.price}</Badge>
                            </p>
                            <dl className="item-property">
                                <dt>Description</dt>
                                <dd><p className="text-capitalize">{product.description}</p></dd>
                            </dl>
                            <Form.Row className="align-items-center">
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
                            </Form.Row>
                            <hr />
                            <Button
                                variant="outline-success"
                                size="lg"
                                onClick={handleAddToCart}
                                className="text-uppercase"><i
                                    className="fa fa-shopping-cart" /> Add to cart
                            </Button>

                        </Card.Body>
                    </Col>
                </Row>
            }
        </Container>
    );
}

export default ProductDetail;