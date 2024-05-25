import type { Action, ThunkAction } from "@reduxjs/toolkit"
import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import menuReducer from "../features/menu/menuSlice"


export const makeStore = (preloadedState?: Partial<any>) => {
  const store = configureStore({
    reducer: menuReducer,
  })
  setupListeners(store.dispatch)
  return store
}
export const store = makeStore()
// Infer the type of `store`
export type AppStore = typeof store
// Infer the `AppDispatch` type from the store itself
export type AppDispatch = AppStore["dispatch"]
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  any, // root state
  unknown,
  Action
>
export type RootState = ReturnType<typeof store.getState>
