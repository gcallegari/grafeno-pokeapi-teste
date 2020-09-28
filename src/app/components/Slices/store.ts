import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { pokemonsReducer } from "./pokemon-slice";


export const store = configureStore({
  reducer: {
    pokemons: pokemonsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
