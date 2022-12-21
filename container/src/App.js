import React from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "./remote_modules/auth";
import Header from "./remote_modules/header";
import Landing from "./remote_modules/landing";

const App = () => {
  return (
    <div>
      <Header />
      <div style={{ width: "100%", height: "calc(100vh - 60px)" }}>
        <Routes>
          <Route path="/auth/*" element={<Auth />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
