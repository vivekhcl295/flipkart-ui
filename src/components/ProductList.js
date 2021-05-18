import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import Product from "./Product";

import { listProducts } from "../actions/productActions";
import { Col, Row, Toast, Spinner } from "react-bootstrap";

function ProductList(props) {
    const productList = useSelector((state) => state.productList);
    const { loading, products, error } = productList;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);

    return (
        <Row>
            {
                loading && <Spinner animation="border" size="xl" />
            }
            {products && products.map(product => (
                <div className="col-lg-3 col-md-6 mb-4" key={product.id}>
                    <Product product={product} />
                </div>
            ))}
            {(error) &&
                <Toast
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        backgroundColor: 'red',
                        color: 'white'
                    }}
                    show={true}
                    delay={5000}
                    autohide={true}
                >
                    <Toast.Body>{error}</Toast.Body>
                </Toast>}
        </Row>
    )
}

export default ProductList;