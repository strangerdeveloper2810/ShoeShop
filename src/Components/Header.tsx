import React from "react";
import { NavLink } from "react-router-dom";
type Props = {};

export default function Header(props: Props) {
  return (
    <div className="header">
      <section className="logo__header">
        <div className="logo">
          <NavLink to="" className={"logo-link"}>
            <img src="./img/logo.png" alt="logo" />
          </NavLink>
        </div>

        <div className="nav-bar-search">
          <div className="search flex-item">
            <NavLink to={"/search"} className={"search-link"}>
              <i className="fa fa-search"></i> Search
            </NavLink>
          </div>

          <div className="carts flex-item">
            <NavLink to={"/carts"} className={"carts-link"}>
              <i className="fa fa-cart-shopping"></i> (1)
            </NavLink>
          </div>

          <div className="login flex-item">
            <NavLink to={"/login"} className={"login-link"}>
              Login
            </NavLink>
          </div>

          <div className="register flex-item">
            <NavLink to={"/register"} className={"register-link"}>
              Register
            </NavLink>
          </div>
        </div>
      </section>

      <section className="menu">
        <nav className="nav-menu">
          <NavLink to={""} className="mx-2">
            Home
          </NavLink>
          <NavLink to={""} className="mx-2">
            Men
          </NavLink>
          <NavLink to={""} className="mx-2">
            Woman
          </NavLink>
          <NavLink to={""} className="mx-2">
            Kid
          </NavLink>
          <NavLink to={""} className="mx-2">
            Sport
          </NavLink>
        </nav>
      </section>
    </div>
  );
}
