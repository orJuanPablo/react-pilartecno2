import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { useState } from "react";
import { Badge, Col, Container, Row, Button } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";
import { addProduct } from "../app/services/productCartServices";
import { getProductById } from "../app/services/productServices";

export const ProductView = ({ match }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const { params } = match;
    getProductById(params.id).then((data) => {
      setProduct(data);
    });
  }, []);
  const addPoductToCart = ({ product }) => {
    addProduct({ product });
  };
  return (
    <Container>
      <h1 className="text-primary">{product?.title}</h1>
      <Row>
        <Col xs={4}>
          <img src={product?.image} alt="ImagenDelProducto"></img>
        </Col>
        <Col xs={4}>
          <h4 className="text-info">{product?.category}</h4>
          <p>{product?.description}</p>
          <div className="row">
            <Button
              className="col-4 m-auto"
              variant="warning"
              onClick={() => addPoductToCart({ product })}
            >
              <FontAwesomeIcon icon={faCartPlus} />
            </Button>
            <Button className="col-4 m-auto" variant="primary">
              <Badge bg="secondary">$ {product?.price}</Badge>
              <span className="visually-hidden"></span>
            </Button>
          </div>
        </Col>
        <Rating ratingValue={product?.rating.rate * 20} readonly />{" "}
        <span>{product?.rating.rate}</span>
        <label className="text-secondary">
          Vistas: {product?.rating.count}
        </label>
      </Row>
    </Container>
  );
};
