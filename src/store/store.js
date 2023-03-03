import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";

//store logic here
export default configureStore({
    reducer: {
        counter: counterReducer,
    },
});

