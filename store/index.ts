import { configureStore } from '@reduxjs/toolkit';
import appConfigReducer from './appConfigSlice';
import userReducer from './userSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    appConfig: appConfigReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
