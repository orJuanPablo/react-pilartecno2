import React from "react";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import { saveLastInterestProduct } from "../../app/services/storageServices";
import "../../assets/css/style.css";

export const CardProduct = ({ item }) => {
  const { title, image, price, description, category } = item;
  return (
    <div className="card-container col-4">
      <Card className="card-product px-1 my-1 " border="primary">
        <Card.Title>
          <h6>
            {title}{" "}
            <Badge bg="info" pill>
              {category}
            </Badge>
          </h6>
        </Card.Title>
        <Card.Img
          variant="top"
          src={image}
          className="img-product h"
        ></Card.Img>
        <Card.Body>
          <div className="row">
          <Button className = "col-4 m-auto" variant="warning" >+ Carrito</Button>
          <Button
            variant="primary"
            className="col-4 m-auto"
            onClick={() => saveLastInterestProduct(title)}
          >
            Precio <Badge bg="secondary">$ {price}</Badge>
            <span className="visually-hidden"></span>
          </Button>
          </div>
          <Accordion className="mt-2">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Descripción</Accordion.Header>
              <Accordion.Body>{description}</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Card.Body>
      </Card>
    </div>
  );
};
