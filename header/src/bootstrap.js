import React from "react";
import { createRoot } from "react-dom/client";
import { History} from "history";

const mount = (el, history = History) => {
  const root = createRoot(el);
  root.render(
    <div
      style={{
        width: "100%",
        height: "60px",
        backgroundColor: "dodgerblue",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <h1>Header</h1>
      <button
        style={{
          backgroundColor: "dodgerblue",
          color: "white",
          borderColor: "white",
          position: "absolute",
          right: "24px",
          height: "30px",
          width: "60px",
        }}
        onClick={() => history?.push("/auth/login")}
      >
        LOGIN
      </button>
    </div>
  );
};

if (!window.containerContext) mount(document.getElementById("root"));

export { mount };
