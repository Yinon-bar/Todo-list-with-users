import "./Layout.css";
import React from "react";
import Header from "../Header/Header";

function Layout() {
  return (
    <div className="Layout">
      <header>
        <Header />
      </header>
      <aside>Aside</aside>
      <main>Main</main>
      <footer>Footer</footer>
    </div>
  );
}

export default Layout;
