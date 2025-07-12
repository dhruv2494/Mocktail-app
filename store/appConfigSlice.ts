import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AppConfigState {
  showBottomTab: boolean;
}

const initialState: AppConfigState = {
  showBottomTab: true,
};

const appConfigSlice = createSlice({
  name: 'appConfig',
  initialState,
  reducers: {
    setShowBottomTab(state, action: PayloadAction<boolean>) {
      state.showBottomTab = action.payload;
    },
  },
});

export const { setShowBottomTab } = appConfigSlice.actions;
export default appConfigSlice.reducer;
