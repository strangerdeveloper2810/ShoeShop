import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        number: (state = 10) => {
            return state;
        }
    }
});

export type RootState = ReturnType<typeof store.getState>