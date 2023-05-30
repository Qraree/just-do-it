import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITask } from "@/types/Task";

const initialState: ITask[] = [
  {
    id: "bdwiebdi3b2bd",
    value: "Call mom",
  },
];

export const tasksSlice = createSlice({
  name: "Tasks",
  initialState,
  reducers: {
    addTask: (state: ITask[], action: PayloadAction<ITask>) => {
      state.push(action.payload);
    },
    deleteTask: (state: ITask[], action: PayloadAction<string>) => {
      return state.filter((el) => el.id !== action.payload);
    },
  },
});

export const { addTask, deleteTask } = tasksSlice.actions;

export default tasksSlice.reducer;
