import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./store/Posts";
import servicesReducer from "./store/Services";
import commentsReducer from "./store/Comments";
import authReducer from "./store/authSlice";
import userQuestionsReducer from "./store/UserQuestions";
import userReducer from "./store/userSlice";

export default configureStore({
  reducer: {
    posts: postReducer,
    services: servicesReducer,
    Comments: commentsReducer,
    auth: authReducer,
    userQuestions: userQuestionsReducer,
    users: userReducer,

  },
});
