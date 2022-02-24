import { createSlice } from "@reduxjs/toolkit";

const initialState = {user: {isAuthenticated: false},};

export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        setUser: (state, action) => { state.user = {...action.payload, isAuthenticated: true}},
    }
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;