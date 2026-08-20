import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { Home } from "./Home";
import { Resume } from "./Resume";
import { Projects } from "./Projects";

export const PageSwitch = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash === "#resume" || hash === "#projects") {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  if (hash === "#resume") {
    return <Resume />;
  } else if (hash === "#projects") {
    return <Projects />;
  }
  return <Home />;
};
