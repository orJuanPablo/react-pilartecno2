import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Alert } from "react-bootstrap";

export const AlertProduct = () => {
  const [lastProduct, setLastProduct] = useState("");
  useEffect(() => {
    setLastProduct(sessionStorage.getItem("lastProduct") || "");
  }, []);
  if (!!lastProduct) {
    return (
      <Alert
        variant="danger"
        onClose={() => {
          setLastProduct("");
        }}
        dismissible
      >
        <Alert.Heading>No te pierdas esta oportunidad</Alert.Heading>
        <p>Aprovecha para comprar {lastProduct} antes de que se agote!</p>
      </Alert>
    );
  } else {
    return <></>;
  }
};
