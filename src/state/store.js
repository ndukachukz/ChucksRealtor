import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { userReducer } from "./reducers/";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export const AuthProvider = ({ children }) => {
  return <Provider store={store}> {children} </Provider>;
};
