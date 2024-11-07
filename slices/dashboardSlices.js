
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchDashboardItems = createAsyncThunk(
    "dashboardList",
    async() => {
        let res = await fetch('https://jsonplaceholder.typicode.com/todos')
        let data = await res.json();
        return data;
    }
    
)

const dashboardSlices = createSlice({
    name: 'dashboard',
    initialState: {
        dashboardItems: [],
        loading: false,
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchDashboardItems.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(fetchDashboardItems.fulfilled, (state, action) => {
                state.dashboardItems = action.payload;
                state.loading = false;
            })
            .addCase(fetchDashboardItems.rejected, (state, action) => {
                state.loading = false
            })
    }
})

export default dashboardSlices.reducer;
