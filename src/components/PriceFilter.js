import React from "react";

import { Row, Card, ListGroup, Form } from "react-bootstrap";

const PriceFilter = (props) => {

    const handleRadioChange = () => {

    }

    return (
        <Card>
            <Card.Header as="h5">Sort By Price</Card.Header>
            {
                ["asc", "desc"].map(type =>
                    <ListGroup.Item key={type}>
                        <Form.Group>
                            <Form.Check
                                type="radio"
                                id={type}
                                value={type}
                                label={type === "asc" ? "Low to High" : "High to Low"}
                                onChange={handleRadioChange}
                            />
                        </Form.Group>
                    </ListGroup.Item>
                )
            }
        </Card>
    );
}

export default PriceFilter;