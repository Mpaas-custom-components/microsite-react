"use client";
import { reducerCases } from "./constants";

export interface InitialState {
  loading: boolean;
}

export const initialState: InitialState = {
  loading: false,
};

export const reducer = (state: InitialState, action: any) => {
  switch (action.type) {
    case reducerCases.SET_LOADING:
      return {
        ...state,
        loading: action.loading,
      };
    default:
      return state;
  }
};
