import { createSlice } from "@reduxjs/toolkit";

export const urlSlice = createSlice({
  name: "url",
  initialState: {
    urlLink: "",
    id: "",
  },
  reducers: {
    postUrl: (state, action) => {
      state.urlLink = action.payload;
    },
    removeUrl: (state) => {
      state.urlLink = "";
    },
    getId: (state, action) => {
      state.id = action.payload;
    },
    removeId: (state) => {
      state.id = "";
    },
  },
});

export const { postUrl, removeUrl, getId, removeId } = urlSlice.actions;
export default urlSlice.reducer;
