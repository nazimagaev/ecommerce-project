import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import { Navbar } from "./Navbar";

const LayoutStyled = styled.div`
  
`;

const Layout = ({ children }) => {
  return (
    <LayoutStyled>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </LayoutStyled>
  );
};

export default Layout;
