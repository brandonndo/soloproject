import { createSlice } from '@reduxjs/toolkit'


const initHabitsState = {
    habitsList: [],
    loading: "idle",
    error: null
}

const myHabitsSlice = createSlice ( {
    name: "habits",
    initialState: initialHabitsState,
    reducers: {},
    extraReducers: {}
})

export default myHabitsSlice.reducer;