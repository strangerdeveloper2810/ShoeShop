import React from "react";
import style from "./Loading.module.css";
const Loading: React.FC = () => {
  return (
    <div className={style.followTheLeader}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default React.memo(Loading);
