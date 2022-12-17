import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history";

import App from "./App";

const mount = (el, history) => {
  const root = createRoot(el);
  root.render(
    <BrowserRouter history={history}>
      <App />
    </BrowserRouter>
  );
};

if (!window.containerContext) {
  const history = createBrowserHistory();
  mount(document.getElementById("root"), history);
}

export { mount };
