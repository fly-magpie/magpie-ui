import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

interface MenuState {
    drawerOpen: boolean;
}
// initial state
const initialState: MenuState = {
    drawerOpen: false,
};

export const menuSlice = createSlice({
    name: 'menu',
    initialState: initialState,
    reducers: {
        toggleDrawer: (state) => {
            state.drawerOpen = !state.drawerOpen;
        },

        openDrawer(state, action: PayloadAction<{drawerOpen: boolean}>) {
            state.drawerOpen = action.payload.drawerOpen;
        },
    },
})

// Action creators are generated for each case reducer function
export const { toggleDrawer, openDrawer } = menuSlice.actions

export default menuSlice.reducer