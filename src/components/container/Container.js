import React from 'react'
import Header from "../header/Header";
import AlertBar from "../layouts/AlertBar";
import Footer from "../layouts/Footer";
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
