import React from "react";
import { createRoot } from "react-dom/client";

const mount = (el) => {
  const root = createRoot(el);
  root.render(
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#282c34",
        color: "white",
        display: "flex",
        "alignItems": "center",
        "justifyContent": "center",
      }}
    >
      <h1>Landing</h1>
    </div>
  );
};

if (!window.containerContext) mount(document.getElementById("root"));

export { mount };
