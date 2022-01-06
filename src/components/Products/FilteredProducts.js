import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { getProductsByCategories } from "../../app/services/productServices";
import { CardProduct } from "./CardProduct";
import { CategoryFilter } from "./CategoryFilter";
const styles = {
  margin: "2vh",
  padding: ".5vh",
};
export const FilteredProducts = ({ match, history }) => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    const { params } = match;
    console.log(params);
    getProductsByCategories(params.category).then((data) => {
      setProducts(data);
    });
  }, [match]);

  return (
    <>
      <Col xs={2} className="bg-primary">
        <CategoryFilter history={history} />
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
