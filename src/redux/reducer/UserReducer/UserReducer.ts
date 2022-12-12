import { ACCESS_TOKEN, history, USER_LOGIN } from "./../../../util/config";
import { UserLoginModel } from "./../../types/UserLoginModel";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { http, settings } from "../../../util/config";

export interface UserLoginResult {
  email: string;
  accessToken: string;
}

export interface UserState {
  userLogin: UserLoginResult;
}

const initialState: UserState = {
  userLogin: settings.getStorageJson(USER_LOGIN)
    ? settings.getCookieJson(USER_LOGIN)
    : null,
};

const UserReducer = createSlice({
  name: "UserReducer",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(
      loginAsyncApi.fulfilled,
      (state: UserState, action: PayloadAction<UserLoginResult>) => {
        state.userLogin = action.payload;
        settings.setStorageJson(USER_LOGIN, action.payload);
        settings.setCookieJson(USER_LOGIN, action.payload, 30);
        settings.setStorageJson(ACCESS_TOKEN, action.payload.accessToken);
        settings.setCookieJson(ACCESS_TOKEN, action.payload.accessToken, 30);
        history.push("/home");
      }
    );
  },
});

export default UserReducer.reducer;

export const loginAsyncApi = createAsyncThunk(
  "UserReducer/loginAsyncApi",
  async (userLogin: UserLoginModel): Promise<UserLoginResult> => {
    const response = await http.post(`/api/Users/signin`, userLogin);
    return response.data.content;
  }
);
