import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import defaultImage from "../default.png";

function PokemonCard({ name, brief, image }) {
  return (
    <Col md={3} style={{ marginBottom: "50px" }}>
      <Card style={{ width: "14rem", backgroundColor: "#b4d619" }}>
        <Card.Img variant="top" src={image || defaultImage} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{brief}</Card.Text>
          <Button variant="primary">Ver stats</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default PokemonCard;





