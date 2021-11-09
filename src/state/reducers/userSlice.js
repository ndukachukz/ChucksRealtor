import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    // Action is an object
    signIn: (state, action) => {
      // sign in user then push userCredentials to user State
      state.user = action.payload;
    },
    signUp: (state, action) => {
      // sign up user then push userCredentials to user State
      state.user = action.payload;
    },
    signOut: (state) => {
      // signOut then set user state back to null
      state.user = null;
    },
  },
});

export const { signIn, signOut, signUp } = userSlice.actions;

// const selectUser = 

export default userSlice.reducer;
