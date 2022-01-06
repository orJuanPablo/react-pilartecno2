import React from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { CardProduct } from "./CardProduct";
import { FilterBar } from "./FilterBar";
const styles = {
  margin: "2vh",
  padding: ".5vh",
};
export const ListProducts = ({ history }) => {
  const products = useSelector((state) => state.productsReducer.products);

  return (
    <>
      <Col xs={2} className="bg-primary">
        <FilterBar history={history} />
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
