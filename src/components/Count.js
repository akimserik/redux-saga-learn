import React from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  asyncCountDecrementAction,
  asyncCountIncrementAction,
} from "../store/countReducer";

const Count = () => {
  const count = useSelector((state) => state.count.count);
  const dispatch = useDispatch();

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>Increment (saga)</Card.Title>
        <Card.Text style={{ textAlign: "center" }}>{count}</Card.Text>
        <div className="app-btn-group">
          <Button
            variant="primary"
            onClick={() => {
              dispatch(asyncCountIncrementAction());
            }}
          >
            Increment
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              dispatch(asyncCountDecrementAction());
            }}
          >
            Decrement
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Count;
