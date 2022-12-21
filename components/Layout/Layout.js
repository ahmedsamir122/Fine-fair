import React from "react";
import Header from "./Header";
import Footer from "../footer/Footer";
const Layout = (props) => {
  return (
    <React.Fragment>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
