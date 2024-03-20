import { createSlice, isAction } from '@reduxjs/toolkit'

export const dishesSlice = createSlice({
    name: 'dishes',
    initialState:{
    selectedCategory:'SALADS'
    },
    reducers: {
        filterCategory:(state,action) =>{
            state.selectedCategory = action.payload;
        }

    }
})

export const {filterCategory}=dishesSlice.actions;
export const getSelectedCategory=state=>state.dishes.selectedCategory;

export default dishesSlice.reducer;