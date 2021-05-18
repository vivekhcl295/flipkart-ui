import react from "react";

import { Form, Col, Button, Card } from "react-bootstrap";

const Address = () => {

    const onFormSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <Card>
            <Card.Header as="h5" className="bg-dark text-light">
                Address Details
            </Card.Header>
            <Card.Body>
                <Form onSubmit={onFormSubmit}>
                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="1234 Main St" />
                    </Form.Group>

                    <Form.Group controlId="formGridAddress2">
                        <Form.Label>Address 2</Form.Label>
                        <Form.Control placeholder="Apartment, studio, or floor" />
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>State</Form.Label>
                            <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control />
                        </Form.Group>
                    </Form.Row>

                    <Button variant="success" type="submit" className="text-uppercase float-right">
                        Continue
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );

}

export default Address;