import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { CardProduct } from "./CardProduct";
import { CategoryFilter } from "./CategoryFilter";
const styles = {
  margin: "2vh",
  padding: ".5vh",
};
export const ListProducts = ({ history }) => {
  const products = useSelector((state) => state.productsReducer.products);
  const filter = useSelector((state) => state.productsReducer.filter);
  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    !filter
      ? setFilteredProducts(products)
      : setFilteredProducts(
          products.filter((product) => product.category === filter)
        );
  }, [filter, products]);

  return (
    <>
      <Col xs={2} className="bg-primary">
        <CategoryFilter history={history} />
      </Col>
      <Col xs={10}>
        <Row style={styles}>
          {filteredProducts?.map((product, index) => (
            <CardProduct key={index} item={product} />
          ))}
        </Row>
      </Col>
    </>
  );
};
