import react, { useState } from "react";

import { Container, Row, Col, Tab, Nav } from "react-bootstrap";

import Address from "../components/Address";
import Payment from "../components/Payment";
import Preview from "../components/Preview";
import Order from "../components/Order";

const PlaceOrder = () => {

    const [tab, setTab] = useState("address");

    return (
        <Container fluid="md">
            <Row>
                <Col>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="address">
                        <Row>
                            <Col sm={3}>
                                <Nav
                                    activeKey={tab}
                                    onSelect={(k) => setTab(k)}
                                    variant="pills"
                                    className="flex-column">
                                    <Nav.Item>
                                        <Nav.Link eventKey="address">Address</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="preview">Preview Order</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="payment">Payment</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="order" disabled>Order</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={9}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="address">
                                        <Address />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="preview">
                                        <Preview />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="payment">
                                        <Payment />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="order">
                                        <Order />
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </Col>
            </Row>
        </Container>
    );
}

export default PlaceOrder;