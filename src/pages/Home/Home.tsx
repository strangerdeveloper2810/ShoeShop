import React,{useEffect} from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { useSelector, useDispatch } from "react-redux";
import { DispatchType, RootState } from "../../redux/configStore";
import { ProductModel } from "../../redux/types/ProductType";
import { getProductApi } from "../../redux/reducer/ProductReducer/ProductReducer";
type Props = {};

export default function Home(props: Props) {
  const { arrProduct } = useSelector(
    (state: RootState) => state.productReducer
  );

  const dispatch:DispatchType = useDispatch();
  
  const getAllProductApi = () => {
    // Gọi api và đưa dữ liệu lên redux
    const actionAsync = getProductApi();
    dispatch(actionAsync);
  }

  useEffect(() => {
    getAllProductApi();
  }, [])
  

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
