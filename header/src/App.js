import React from "react";
import { useNavigate } from "react-router-dom";

const App = ({ navigate }) => {
  let customNavigate = navigate;
  if (!navigate) {
    customNavigate = useNavigate();
  }

  return (
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
        onClick={() => customNavigate("/auth/login")}
      >
        LOGIN
      </button>
    </div>
  );
};

export default App;
