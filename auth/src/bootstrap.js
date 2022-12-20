import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

let root;

const mount = (el, navigate, location) => {
  root = createRoot(el);
  root.render(
    <BrowserRouter>
      <App navigate={navigate} location={location} />
    </BrowserRouter>
  );
};

const render = (navigate, location) => {
  root.render(
    <BrowserRouter>
      <App navigate={navigate} location={location} />
    </BrowserRouter>
  );
};

if (!window.containerContext) {
  mount(document.getElementById("root"));
}

export { mount, render };
