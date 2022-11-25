import React from "react";
import {NavLink} from "react-router-dom"
type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="footer">
      <div className="row justify-content-around">
        <div className="col-3 p-5" style={{ transform: "translateX(30%)" }}>
          <h3>GET HELP</h3>
          <nav className="d-flex flex-column">
            <NavLink to="">Home</NavLink>
            <NavLink to="">Nike</NavLink>
            <NavLink to="">Adidas</NavLink>
            <NavLink to="">Contact</NavLink>
          </nav>
        </div>
        <div className="col-3 p-5" style={{ transform: "translateX(30%)" }}>
          <h3>GET HELP</h3>
          <nav className="d-flex flex-column">
            <NavLink to="">Home</NavLink>
            <NavLink to="">Nike</NavLink>
            <NavLink to="">Adidas</NavLink>
            <NavLink to="">Contact</NavLink>
          </nav>
        </div>
        <div className="col-3 p-5" style={{ transform: "translateX(30%)" }}>
          <h3>GET HELP</h3>
          <nav className="d-flex flex-column">
            <NavLink to="">Home</NavLink>
            <NavLink to="">Nike</NavLink>
            <NavLink to="">Adidas</NavLink>
            <NavLink to="">Contact</NavLink>
          </nav>
        </div>
      </div>
     
    </footer>
  );
}
