import { createSlice } from "@reduxjs/toolkit";

interface ProductsState {
    products: [];
    loading:boolean;
    eroor:string|null;
}

const initialState: ProductsState = {
    products:[],
    loading: false,
    eroor: null,
};

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
});

export default productsSlice.reducer;