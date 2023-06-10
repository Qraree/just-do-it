import { createSlice } from "@reduxjs/toolkit";

interface userStateType {
  id: string;
  email: string;
  password: string;
  authorized: boolean;
}

const initialState: userStateType = {
  id: "bdwiebdi3b2bd",
  email: "hello@gmail.com",
  password: "lfnewbiwe",
  authorized: false,
};

export const userSlice = createSlice({
  name: "Tasks",
  initialState,
  reducers: {
    userLogin: (state) => {
      state.authorized = true;
    },
    userLogout: (state) => {
      state.authorized = false;
    },
  },
});

export const { userLogin, userLogout } = userSlice.actions;

export default userSlice.reducer;
