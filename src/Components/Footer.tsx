import React from "react";
import { NavLink } from "react-router-dom";

type Props = {};

export default function Footer(props: Props) {
  return (
    <footer className="footer">
      <div className="footer__menu">
        <div className="footer__item">
          <h3>get help</h3>
          <NavLink to={""}>home</NavLink>
          <NavLink to={""}>nike</NavLink>
          <NavLink to={""}>adidas</NavLink>
          <NavLink to={""}>contact</NavLink>
        </div>

        <div className="line"></div>

        <div className="footer__item">
          <h3>support</h3>
          <NavLink to={""}>about</NavLink>
          <NavLink to={""}>contact</NavLink>
          <NavLink to={""}>help</NavLink>
          <NavLink to={""}>phone</NavLink>
        </div>

        <div className="line"></div>

        <div className="footer__item">
          <h3>register</h3>
          <NavLink to={""}>login</NavLink>
          <NavLink to={""}>register</NavLink>
        </div>

      </div>
      <div className="footer__bottom">
        <p>&copy; 2022 Design By Stranger</p>
      </div>
    </footer>
  );
}
