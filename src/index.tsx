import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, Navigate, unstable_HistoryRouter as HistoryBrowser } from "react-router-dom";
import Cart from "./pages/Carts/Cart";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import Register from "./pages/Register/Register";
import Search from "./pages/Search/Search";
import reportWebVitals from "./reportWebVitals";
import HomeTemplate from "./templates/HomeTemplate";
import Detail from "./pages/Detail/Detail";
// Style
import "./assets/scss/style.scss";
import { Provider } from "react-redux/es/exports";
import { store } from "./redux/configStore";
import { history } from "./util/config";

// Redux

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HistoryBrowser history={history}>
        <Routes>
          <Route path="" element={<HomeTemplate />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="carts" element={<Cart />} />
            <Route path="detail">
              <Route path=":id" element={<Detail/>}></Route>
            </Route>
            <Route path="profile" element={<Profile />} />
            <Route path="search" element={<Search />} />
            <Route path="*" element={<Navigate to="" />} />
          </Route>
        </Routes>
      </HistoryBrowser>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
