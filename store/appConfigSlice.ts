import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AppConfigState {
  showBottomTab: boolean;
  showHeader: boolean;
  showSidebarToggle: boolean;
  headerText: string;
}

const initialState: AppConfigState = {
  showBottomTab: true,
  showHeader: true,
  showSidebarToggle: true,
  headerText: ""
};

const appConfigSlice = createSlice({
  name: 'appConfig',
  initialState,
  reducers: {
    setShowBottomTab(state, action: PayloadAction<boolean>) {
      state.showBottomTab = action.payload;
    },
    setShowHeader(state, action: PayloadAction<boolean>) {
      state.showHeader = action.payload;
    },
    setShowSidebarToggle(state, action: PayloadAction<boolean>) {
      state.showSidebarToggle = action.payload;
    },
    setHeaderText(state, action: PayloadAction<string>) {
      state.headerText = action.payload;
    },
  },
});

export const { setShowBottomTab, setShowHeader, setShowSidebarToggle, setHeaderText } = appConfigSlice.actions;
export default appConfigSlice.reducer;
