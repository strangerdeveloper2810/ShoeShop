import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/configStore";
import "../../assets/scss/components/_loading.scss"
type Props = {};

export default function Loading(props: Props) {
  const { isLoading } = useSelector((state: RootState) => state.loadingReducer);
  if (isLoading) {
    return (
        <div className="bgLoading">
        <img src="./img/loading.gif" alt="loading" />
      </div>
    );
  } else {
    return <div>
        
    </div>;
  }
}
