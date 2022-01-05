import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { getAllProducts } from "../../app/services/productServices";
import { CardProduct } from "./CardProduct";
import { FilterBar } from "./FilterBar";
const styles = {
  margin: "2vh",
  padding: ".5vh",
};
export const ListProducts = () => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    getAllProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <>
      <Col xs={2} className="bg-primary">
        <FilterBar />
      </Col>
      <Col xs={10}>
        <Row style={styles}>
          {products?.map((product, index) => (
            <CardProduct key={index} item={product} />
          ))}
        </Row>
      </Col>
    </>
  );
};
