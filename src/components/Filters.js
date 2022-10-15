import React from "react";
import { Button, Form } from "react-bootstrap";
import Rating from "./Rating";

const Filters = () => {
  return (
    <div className="filters">
      <span className="title">Filter Products</span>
      <Form.Check
        inline
        label="Ascending"
        name="group1"
        type="radio"
        id={`inline-1`}
      />
      <Form.Check
        inline
        label="Decending"
        name="group1"
        type="radio"
        id={`inline-1`}
      />
      <Form.Check
        inline
        label="Out Of Stock"
        name="group1"
        type="checkbox"
        id={`inline-1`}
      />
      <Form.Check
        inline
        label="Past delivery only"
        name="group1"
        type="checkbox"
        id={`inline-1`}
      />
      <span>
        <label style={{ paddingRight: 10, fontSize: 20 }}>Rating: </label>
        <Rating style={{ cursor: "pointer" }} />
      </span>
      <Button variant="light">Clear Filters</Button>
    </div>
  );
};

export default Filters;
