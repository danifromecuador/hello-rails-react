import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    greeting: greetingReducer,
  },
});

export default store;