import React from "react";
import { Button, Card } from "react-bootstrap";
import Rating from "./Rating";

const Singleproduct = ({ item }) => {
  return (
    <div className="products">
      <Card>
        <Card.Img variant="top" src={item.image} alt={item.name} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Subtitle>
            ${item.price.split(".")[0]}
            {item.fastDelivery ? (
              <div>fast delivery</div>
            ) : (
              <div>four days delivery</div>
            )}
            <Rating rating={item.ratings} />
          </Card.Subtitle>
          <Button>Add to Cart </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Singleproduct;
