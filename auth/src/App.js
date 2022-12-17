import React, { useEffect, useState } from "react";
import {
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";

const selectedButtonStyle = {
  borderBottom: "4px solid dodgerblue",
};
const basicButtonStyle = {
  borderRadius: 0,
  flex: 1,
  backgroundColor: "white",
  border: "none",
  borderBottom: "none",
  fontWeight: "bold",
  height: "50px",
  alignItems: "center",
};

const App = () => {
  const [val, setVal] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const syncTabToReflectRoute = () => {
    if (location.pathname === "/auth/login") setVal(0);
    else if (location.pathname === "/auth/register") setVal(1);
  };

  useEffect(() => {
    syncTabToReflectRoute();
  }, [location]);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#282c34",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "550px",
          height: "700px",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "40px",
            backgroundColor: "white",
          }}
        >
          <button
            onClick={() => navigate(`/auth/login`)}
            style={
              val === 0
                ? { ...basicButtonStyle, ...selectedButtonStyle }
                : basicButtonStyle
            }
          >
            Login
          </button>
          <button
            onClick={() => navigate(`/auth/register`)}
            style={
              val === 1
                ? { ...basicButtonStyle, ...selectedButtonStyle }
                : basicButtonStyle
            }
          >
            Register
          </button>
        </div>
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Routes>
            <Route path="/auth/login" element={<h1>Login</h1>} />
            <Route path="/auth/register" element={<h1>Register</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
