import "./Layout.css";
import React from "react";
import Header from "../Header/Header";
import Aside from "../Aside/Aside";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

function Layout() {
  return (
    <div className="Layout">
      <Header />
      <Aside />
      <Main />
      <Footer />
    </div>
  );
}

export default Layout;
