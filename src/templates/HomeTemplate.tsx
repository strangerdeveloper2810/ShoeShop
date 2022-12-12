import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";

import Header from "../Components/Header";
type Props = {};

export default function HomeTemplate(props: Props) {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer/>
    </div>
  );
}
