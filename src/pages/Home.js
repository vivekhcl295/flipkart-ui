import React from 'react';

import FilterBar from "../components/FilterBar";
import ProductList from "../components/ProductList";

import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
    return (
        <React.Fragment>
            <Container fluid >
                <Row>
                    <Col lg={2}>
                        <FilterBar />
                    </Col>
                    <Col lg={10}>
                        <ProductList />
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
};


export default Home;
