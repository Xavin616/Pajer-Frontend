import { createSlice } from "@reduxjs/toolkit";

const initialState = {source:{},};

export const sourceSlice = createSlice({
    name: 'sourceSlice',
    initialState,
    reducers: {
        setSource: (state, action) => { state.source = {...action.payload} }
    }
});

export const { setSource } = sourceSlice.actions;

export default sourceSlice.reducer;