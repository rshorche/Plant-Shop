import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./store/Posts";
import servicesReducer from "./store/Services";
import commentsReducer from "./store/Comments";

export default configureStore({
  reducer: {
    posts: postReducer,
    services: servicesReducer,
    Comments: commentsReducer,
  },
});