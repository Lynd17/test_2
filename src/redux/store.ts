import { configureStore } from '@reduxjs/toolkit';
import { commonReducer } from './reducers';

export const store = configureStore({
  reducer: {
    common: commonReducer,
  },
});
