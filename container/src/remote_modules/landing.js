import React, { useEffect, useRef } from "react";
import { mount } from "landing/LandingComponent";

const Landing = () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return (
    <>
      <div ref={ref} style={{ height: "100%" }}></div>
    </>
  );
};

export default Landing;
