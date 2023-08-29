import { createSlice } from "@reduxjs/toolkit";

const InfoSlice = createSlice({
  name: "Info",
  initialState: {
    Info: {
      data: null,
      msg: null,
      error: false,
    },
  
  },
  reducers: {
    getInfoSuccess: (state, action) => {
      state.Info.data = action.payload;
    },
  },
});

export const { getInfoSuccess } = InfoSlice.actions;

export default InfoSlice.reducer;
