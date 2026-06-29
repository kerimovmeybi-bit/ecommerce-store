import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface FavoritesState {
  items: number[];
}

const savedFavorites = localStorage.getItem("favorites");

const initialState: FavoritesState = {
  items: savedFavorites ? JSON.parse(savedFavorites) : [],
};

const favoriteSlice = createSlice({
  name: "favorites",

  initialState,

  reducers: {
    toggleFavorite(state, action: PayloadAction<number>) {
      const productId = action.payload;

      if (state.items.includes(productId)) {
        state.items = state.items.filter(
          (id) => id !== productId
        );
      } else {
        state.items.push(productId);
      }

      localStorage.setItem(
        "favorites",
        JSON.stringify(state.items)
      );
    },
  },
});

export const { toggleFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;