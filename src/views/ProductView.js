import React, { useEffect } from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { getProductById } from "../app/services/productServices";

export const ProductView = ({ match }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const { params } = match;
    setProduct(getProductById(params.id));
  }, []);

  return (
    <Container>
      <h1>Información del producto</h1>
      <p>{JSON.stringify(product) ?? "No hay Producto"}</p>
    </Container>
  );
};
