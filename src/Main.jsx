import React from "react";
import { Routes, Route } from "react-router-dom";

import { PageSwitch } from "./views/PageSwitch";
import { NotFound } from "./views/NotFound";

export const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<PageSwitch />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
