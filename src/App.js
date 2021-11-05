import React from "react";
import "./App.css";
import {
  Container,
  Button,
  Card,
  Row,
  ListGroup,
  ListGroupItem,
  Col,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addCashAction, getCashAction } from "./store/cashReducer";
import {
  addCustomerAction,
  asyncAddManyCustomersAction,
  removeCustomerAction,
} from "./store/customerReducer";
// import { fetchCustomers } from "./asyncActions/customers";
import Count from "./components/Count";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector((state) => state.customers.customers);

  const getCash = (sum) => {
    dispatch(getCashAction(sum));
  };

  const addCash = (sum) => {
    dispatch(addCashAction(sum));
  };

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id));
  };

  const addCustomer = (name) => {
    const newCustomer = {
      name,
      id: Date.now(),
    };
    dispatch(addCustomerAction(newCustomer));
  };

  return (
    <Container className="app-container">
      <Row className="app-cont-row">
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Cash balance</Card.Title>
              <Card.Text style={{ textAlign: "center" }}>{cash}</Card.Text>
              <div className="app-btn-group">
                <Button
                  variant="primary"
                  onClick={() => getCash(Number(prompt()))}
                >
                  Get cash
                </Button>
                <Button
                  variant="primary"
                  onClick={() => addCash(Number(prompt()))}
                >
                  Add cash
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Count />
        </Col>
      </Row>

      <Row
        className="app-cont-row"
        style={{ padding: "1rem", border: "1px solid #eee", width: "100%" }}
      >
        <Card.Title>Customers</Card.Title>
        <Row className="app-cont-row">
          <div className="app-btn-group">
            <Button
              variant="primary"
              onClick={() => {
                addCustomer(prompt());
              }}
            >
              Add customer
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                dispatch(asyncAddManyCustomersAction());
              }}
            >
              Fetch customers
            </Button>
          </div>
        </Row>

        <Row className="app-cont-row">
          {customers.length > 0 ? (
            <ListGroup>
              {customers.map((customer, index) => (
                <ListGroupItem
                  key={index}
                  onClick={() => {
                    removeCustomer(customer);
                  }}
                >
                  {customer.name}
                </ListGroupItem>
              ))}
            </ListGroup>
          ) : (
            <div>{"No customers"}</div>
          )}
        </Row>
      </Row>
    </Container>
  );
}

export default App;
