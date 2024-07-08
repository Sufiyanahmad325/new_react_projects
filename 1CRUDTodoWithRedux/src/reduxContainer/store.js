import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "../feature/todo/TodoSlice";



export const store = configureStore({
    reducer: todoSlice
})