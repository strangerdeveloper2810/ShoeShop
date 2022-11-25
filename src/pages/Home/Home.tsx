import React from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/configStore";
import { ProductModel } from "../../redux/types/ProductType";
type Props = {};

export default function Home(props: Props) {
  const { arrProduct } = useSelector(
    (state: RootState) => state.productReducer
  );

  return (
    <div className="container">
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
    </div>
  );
}
