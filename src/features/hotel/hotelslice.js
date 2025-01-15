import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
  hotelDetails: {},
};

export const hotelSlice = createSlice({
  name: "hotelName",
  initialState,
  reducers: {
    changeName: (state, action) => {
      state.value = action.payload;
    },
    setHotelDetails: (state, action) => {
      state.hotelDetails = action.payload;
    },
  },
});

export const { changeName, setHotelDetails } = hotelSlice.actions;

export default hotelSlice.reducer;
