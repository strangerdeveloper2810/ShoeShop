import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { DispatchType } from "../../configStore";
import { ProductModel } from "../../types/ProductType";
export type ProductState = {
  arrProduct: ProductModel[];
};
const initialState: ProductState = {
  arrProduct: [
    {
      id: 1,
      name: "Adidas Prophere",
      alias: "adidas-prophere",
      price: 350,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      size: "[36,37,38,39,40,41,42]",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 995,
      deleted: false,
      categories:
        '[{"id":"ADIDAS","category":"ADIDAS"},{"id":"MEN","category":"MEN"},{"id":"WOMEN","category":"WOMEN"}]',
      relatedProducts: "[2,3,5]",
      feature: true,
      image: "https://shop.cyberlearn.vn/images/adidas-prophere.png",
    },
  ],
};

const ProductReducer = createSlice({
  name: "ProductReducer",
  initialState,
  reducers: {
    setArrProductAction: (
      state: ProductState,
      action: PayloadAction<ProductModel[]>
    ) => {
      state.arrProduct = action.payload;
    },
  },
});

export const { setArrProductAction } = ProductReducer.actions;

export default ProductReducer.reducer;

/* ----------------- action api --------------------------- */

export const getProductApi = () => {
  return async (dispatch: DispatchType) => {
    try {
      const result = await axios({
        url: `https://shop.cyberlearn.vn/api/Product`,
        method: "GET",
      });
      const content: ProductModel[] = result.data.content;
      
      //   Sau khi lấy dữ liệu từ api về, chúng ta sẽ dispatch lên store
      const action: PayloadAction<ProductModel[]> =
        setArrProductAction(content);
      dispatch(action);

      console.log("content", content);
    } catch (error) {
      console.log(error);
    }
  };
};
