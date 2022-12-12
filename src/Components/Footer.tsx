import * as React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { NavLink } from "react-router-dom";

const theme = createTheme();

export default function Footer() {
  return (
    <ThemeProvider theme={theme}>
      <footer className="footer">
      <Typography variant="body2" color="text.secondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="https://www.facebook.com/strangerdeveloper/">
          By Stranger Developer
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
        {/* <div className="footer__menu">
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
        </div> */}
      </footer>
      {/*  */}
    </ThemeProvider>
  );
}
