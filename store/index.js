import { configureStore } from "@reduxjs/toolkit";
import  dashboardReducer  from "../slices/dashboardSlices";

export default configureStore({
    reducer: {
        dashboard: dashboardReducer
    }
})
