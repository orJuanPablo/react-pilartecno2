import React from "react";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import "../assets/css/style.css";

export const CardProduct = ({ item }) => {
  const { title, image, price, description, category } = item;
  return (
    <Card className="card-product col-4" border="primary" >
      <Card.Title>
        <h6>
          {title}{" "}
          <Badge bg="info" pill>
            {category}
          </Badge>
        </h6>
      </Card.Title>
      <Card.Img variant="top" src={image} className="img-product"></Card.Img>
      <Card.Body>
        <Button variant="primary" className="col-8">
          Precio <Badge bg="secondary">$ {price}</Badge>
          <span className="visually-hidden"></span>
        </Button>
        {/* <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Descripción</Accordion.Header>
            <Accordion.Body>{description}</Accordion.Body>
          </Accordion.Item>
       </Accordion>*/}
      </Card.Body>
    </Card>
  );
};
