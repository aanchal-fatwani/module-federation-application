import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./remote_modules/header";
// import Auth from "./remote_modules/auth";
// import Landing from "./remote_modules/landing";

const Auth = lazy(()=>import("./remote_modules/auth"))
const Landing = lazy(()=>import("./remote_modules/landing"))

const App = () => {
  return (
    <div>
      <Header />
      <div style={{ width: "100%", height: "calc(100vh - 60px)" }}>
        <Suspense fallback={<div>Loading..</div>}>
        <Routes>
          <Route path="/auth/*" element={<Auth />} />
          <Route path="/" element={<Landing />} />
        </Routes>
        </Suspense>
      </div>
    </div>
  );
};

export default App;
