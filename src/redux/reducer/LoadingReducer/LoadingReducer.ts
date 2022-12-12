import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading: false,
}

const LoadingReducer = createSlice({
  name: "LoadingReducer",
  initialState,
  reducers: {}
});

// export const {} = LoadingReducer.actions

export default LoadingReducer.reducer