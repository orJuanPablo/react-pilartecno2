import React from "react";
import { Row } from "react-bootstrap";
import { CategoryFilter } from "./CategoryFilter";

export const FilterBar = () => {
  return (
    <>
      <Row className="vertically-centered">
        <CategoryFilter />
      </Row>
    </>
  );
};
