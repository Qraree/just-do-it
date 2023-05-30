import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "@/redux/features/tasks/tasksSlice";
import userReducer from "@/redux/features/user/userSlice";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    users: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
