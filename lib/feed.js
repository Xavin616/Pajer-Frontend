import { createSlice } from "@reduxjs/toolkit";

const initialState = {feed:{status: 'undefined'},};

export const feedSlice = createSlice({
    name: "feedSlice",
    initialState,
    reducers: {
        setFeed: (state, action) => {state.feed = {...action.payload}}
    },
})

export const { setFeed } = feedSlice.actions;

export default feedSlice.reducer