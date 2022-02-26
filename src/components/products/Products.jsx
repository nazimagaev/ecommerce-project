import React from "react";
import styled from "styled-components";
import Product from "./Product";

const Products = () => {
  return (
    <Wrapper>
      <h1>Products</h1>
      <div className="products-container">
        <Product />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 60px;
  h1 {
    padding: 10px 0;
  }
  .products-container {
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
`;
export default Products;
