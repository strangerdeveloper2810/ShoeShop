import * as React from "react";
import { Container } from "@mui/material";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { useSelector, useDispatch } from "react-redux";
import { RootState, DispatchType } from "../../redux/configStore";
import { RelatedProduct } from "../../redux/types/ProductDetailType";
import { useParams } from "react-router-dom";
import { getProductDetailApi } from "../../redux/reducer/ProductReducer/ProductReducer";
type Props = {};

export default function Detail(props: Props) {
  const { productDetail } = useSelector(
    (state: RootState) => state.productReducer
  );

  const dispatch: DispatchType = useDispatch();
  const params = useParams();

  const getProductDetailByApi = () => {
    // B1: lấy param từ url
    const id: string | undefined = params.id;

    // B2: Dispatch thunk
    const actionThunk = getProductDetailApi(id as string);
    dispatch(actionThunk);
  };

  React.useEffect(() => {
    getProductDetailByApi();
  }, [params.id]);
  return (
    <Container maxWidth="xl">
      <div className="row mt-4">
        <div className="col-4">
          <img
            src={productDetail?.image}
            alt={productDetail?.name}
            height={350}
            width={350}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="col-8">
          <h3 className="text-success">{productDetail?.name}</h3>
          <p>{productDetail?.shortDescription}</p>
        </div>
      </div>

      <h3 className="mt-3 text-center text-secondary"> Relate Product </h3>
      <div className="row">
        {productDetail?.relatedProducts.map(
          (item: RelatedProduct, index: number) => {
            return (
              <div className="col-4" key={index}>
                <ProductCard product={item} />
              </div>
            );
          }
        )}
      </div>
    </Container>
  );
}
