import * as React from "react";
import Layout from "../components/layout";
import "../Styles/index.scss";
import Hero from "../components/Home/hero";

const IndexPage = () => {
  return (
    <>
      <Layout pageTitle="Home Page" />
      <Hero />
    </>
  );
};

export default IndexPage;
