import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
  name: "userObj",
  initialState: {
    userObj: null,
  },
  reducers: {
    login: (state, action) => {
      state.userObj = action.payload;
    },
    logout: (state) => {
      state.userObj = null;
    },
  },
});

export const { login, logout } = UserSlice.actions;

export const selectUserObj = (state) => state.userObj.userObj;

export default UserSlice.reducer;
