import { configureStore } from "@reduxjs/toolkit";
import hotelReducer from "../features/hotel/hotelslice";
import { loadState, saveState } from "../localStorageUtils";

const persistedState = loadState();

export const store = configureStore({
  reducer: {
    hotelName: hotelReducer, 
  },
  preloadedState: persistedState,
});

store.subscribe(() => {
  saveState({
    hotelName: store.getState().hotelName, 
  });
});

