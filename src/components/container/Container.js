import React from 'react'
import AlertBar from "../layouts/AlertBar";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import Templates from "../templates/Templates";
import "./Container.scss";

const Container = () => {
    return (
      <div className="container">
        <Header />
        <AlertBar />
        <Templates />
        <Footer />
      </div>
    );
}

export default Container
