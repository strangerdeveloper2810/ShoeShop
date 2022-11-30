import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
// import axios from "axios";
// import { DispatchType } from "../../configStore";
import { ProductModel } from "../../types/ProductType";
import { ProductDetailModel } from "../../types/ProductDetailType";
import { http } from "../../../util/config";
export type ProductState = {
  arrProduct: ProductModel[];
  productDetail: ProductDetailModel | null;
  isLoading: boolean,
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

  productDetail: {
    id: 1,
    name: "Adidas Prophere",
    alias: "adidas-prophere",
    price: 350,
    feature: false,
    description:
      "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
    size: ["36", "37", "38", "39", "40", "41", "42"],
    shortDescription:
      "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
    quantity: 995,
    image: "https://shop.cyberlearn.vn/images/adidas-prophere.png",
    categories: [
      {
        id: "ADIDAS",
        category: "ADIDAS",
      },
      {
        id: "MEN",
        category: "MEN",
      },
      {
        id: "WOMEN",
        category: "WOMEN",
      },
    ],
    relatedProducts: [
      {
        id: 2,
        name: "Adidas Prophere Black White",
        alias: "adidas-prophere-black-white",
        feature: false,
        price: 450,
        description:
          "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
        shortDescription:
          "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
        image:
          "https://shop.cyberlearn.vn/images/adidas-prophere-black-white.png",
      },
      {
        id: 3,
        name: "Adidas Prophere Customize",
        alias: "adidas-prophere-customize",
        feature: false,
        price: 375,
        description:
          "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
        shortDescription:
          "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
        image:
          "https://shop.cyberlearn.vn/images/adidas-prophere-customize.png",
      },
      {
        id: 5,
        name: "Adidas Swift Run",
        alias: "adidas-swift-run",
        feature: false,
        price: 550,
        description:
          "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
        shortDescription:
          "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
        image: "https://shop.cyberlearn.vn/images/adidas-swift-run.png",
      },
    ],
  },
  isLoading: false
  
};

const ProductReducer = createSlice({
  name: "ProductReducer",
  initialState,
  reducers: {
    // setArrProductAction: (
    //   state: ProductState,
    //   action: PayloadAction<ProductModel[]>
    // ) => {
    //   state.arrProduct = action.payload;
    // },  
  },
  // pending: đang xử lý,
  // fullfiled: đã xử lý thành công
  // reject: xử lý thất bại
  extraReducers(builder) {
    // Get All Product
    builder.addCase(
      getAllProductApi.pending,
      (state: ProductState, action) => {}
    );

    builder.addCase(
      getAllProductApi.fulfilled,
      (state: ProductState, action: PayloadAction<ProductModel[]>) => {
        state.arrProduct = action.payload;
      }
    );

    builder.addCase(
      getAllProductApi.rejected,
      (state: ProductState, action) => {}
    );

    builder.addCase(
      getProductDetailApi.pending,
      (state: ProductState, action) => {}
    );

    // Get Product Detail
    builder.addCase(
      getProductDetailApi.fulfilled,
      (state: ProductState, action: PayloadAction<ProductDetailModel>) => {
        state.productDetail = action.payload;
      }
    );

    builder.addCase(
      getProductDetailApi.rejected,
      (state: ProductState, action) => {}
    );

    
  },
});

// export const { setArrProductAction } = ProductReducer.actions;

export default ProductReducer.reducer;

// /* ----------------- action api --------------------------- */

// export const getProductApi = () => {
//   return async (dispatch: DispatchType) => {
//     try {
//       const result = await axios({
//         url: `https://shop.cyberlearn.vn/api/Product`,
//         method: "GET",
//       });
//       const content: ProductModel[] = result.data.content;

//       //   Sau khi lấy dữ liệu từ api về, chúng ta sẽ dispatch lên store
//       const action: PayloadAction<ProductModel[]> =
//         setArrProductAction(content);
//       dispatch(action);
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

export const getAllProductApi = createAsyncThunk(
  "ProductReducer/getAllProductApi",
  async () => {
    const result = await http.get(`/api/Product`);
    return result.data.content;
  }
);

export const getProductDetailApi = createAsyncThunk(
  "ProductReducer/getProductDetailApi",
  async (id: string) => {
    const response = await http.get(`/api/Product/getbyid?id=${id}`);
    return response.data.content;
  }
);
