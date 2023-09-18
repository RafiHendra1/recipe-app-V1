import { createSlice } from '@reduxjs/toolkit';


const appSlice = createSlice({
    name: 'filter',
    initialState: {
        maxCookTime: 100,
        maxPrepTime: 100,
        maxNetCarbs: 12,
        maxCalories: 400,
        maxSugar: 8
      },
    reducers: {
        setMaxCookTime: (state, action) => {
            state.maxCookTime = action.payload
            
        },
        setMaxPrepTime: (state, action) => {
            state.maxPrepTime = action.payload
        },
        setMaxNetCarbs: (state, action) => {
            state.maxNetCarbs = action.payload
        },
        setMaxCalories: (state, action) => {
            state.maxCalories = action.payload
        },
        setMaxSugar: (state, action) => {
            state.maxSugar = action.payload
        },
        setRandom: (state, action) => {
            state.random = action.payload
        }
    }
});

export const {setMaxCookTime, setMaxPrepTime, setMaxNetCarbs, setMaxCalories, setMaxSugar, setRandom} = appSlice.actions;
export default appSlice.reducer;