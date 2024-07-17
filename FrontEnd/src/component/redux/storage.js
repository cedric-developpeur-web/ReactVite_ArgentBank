import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/authenticationSlice";

const storage = configureStore({
  reducer: {
    authentication: authReducer,
  },
});
export default storage;