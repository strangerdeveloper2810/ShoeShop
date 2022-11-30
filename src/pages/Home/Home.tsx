import React, { useEffect } from "react";
import Container from "@mui/material/Container";

import ProductCard from "../../Components/ProductCard/ProductCard";
import { useSelector, useDispatch } from "react-redux";
import { DispatchType, RootState } from "../../redux/configStore";
import { ProductModel } from "../../redux/types/ProductType";
import { getAllProductApi } from "../../redux/reducer/ProductReducer/ProductReducer";
// import { getProductApi } from "../../redux/reducer/ProductReducer/ProductReducer";
type Props = {};

export default function Home(props: Props) {
  const { arrProduct } = useSelector(
    (state: RootState) => state.productReducer
  );

  const dispatch: DispatchType = useDispatch();

  const getAllProductByApi = () => {
    const actionThunk = getAllProductApi();
    dispatch(actionThunk);
  };

  useEffect(() => {
    getAllProductByApi();
  }, []);

  return (
    <Container maxWidth="xl">
      <h3>Product Feature</h3>
      <div className="row mb-2">
        {arrProduct.map((item: ProductModel, index: number) => {
          return (
            <div className="col-4" key={index}>
              <ProductCard product={item} />
            </div>
          );
        })}
      </div>
    </Container>
  );
}
