import React, { useEffect, useRef } from "react";
import { mount, render } from "auth/AuthComponent";
import { useNavigate, useLocation } from "react-router-dom";

const Auth = () => {
  const ref = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    mount(ref.current, navigate, location);
  }, []);

  useEffect(() => {
    render(navigate, location);
  }, [location]);

  return (
    <>
      <div ref={ref} style={{ height: "100%" }}></div>
    </>
  );
};

export default Auth;
