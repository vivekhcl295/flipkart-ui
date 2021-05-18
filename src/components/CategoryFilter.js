import React from "react";
import { Card, ListGroup, Form, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";

const CategoryFilter = (props) => {
    const productList = useSelector((state) => state.productList);
    const { loading, products } = productList;

    debugger
    return (
        <Card className="mb-3">
            <Card.Header as="h5">Categories</Card.Header>
            <ListGroup>
                {
                    loading && <Spinner animation="border" size="xl" />
                }
                {
                    products &&
                    Array.from(new Set(
                        products.map(product => product.subCategory)
                    )).map(subCategory =>
                        <ListGroup.Item key={subCategory}>
                            <Form.Check
                                id={subCategory}
                                type="checkbox"
                                label={subCategory}
                            />
                        </ListGroup.Item>
                    )
                }
            </ListGroup>
        </Card>
    );
}

export default CategoryFilter;