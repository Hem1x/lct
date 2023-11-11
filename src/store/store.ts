import {
  configureStore,
  combineReducers,
  Middleware,
  Dispatch,
  AnyAction,
} from '@reduxjs/toolkit';
import authReducer from './features/authSlice';
import { api } from './api/api';
import dataReducer from './features/dataSlice';

const localStorageMiddleware: Middleware =
  (store) => (next: Dispatch<AnyAction>) => (action: AnyAction) => {
    next(action);
    localStorage.setItem('reduxState', JSON.stringify(store.getState()));
  };

const savedState = localStorage.getItem('reduxState');
const preloadedState = savedState ? JSON.parse(savedState) : undefined;

const rootReducer = combineReducers({
  auth: authReducer,
  data: dataReducer,
  [api.reducerPath]: api.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  preloadedState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware).concat(localStorageMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
