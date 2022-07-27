import { configureStore } from "@reduxjs/toolkit";
import { HYDRATE, createWrapper } from "next-redux-wrapper";
import reducers from "./reducers";

const reducer = (state: any, action: any) => {
  const { type, payload } = action;
  if (type === HYDRATE) {
    const nextState = {
      ...state,
      ...payload,
    };
    return nextState;
  } else {
    return reducers(state, action);
  }
};

export const initStore: any = () =>
  configureStore({
    reducer,
  });

export type AppDispatch = typeof initStore.dispatch;
export type RootState = ReturnType<typeof initStore.getState>;
export const wrapper = createWrapper(initStore, { debug: true });
