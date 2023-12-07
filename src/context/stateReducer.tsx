"use client";
import { reducerCases } from "./constants";

export interface InitialState {
  isLoading: boolean;
}

export const initialState: InitialState = {
  isLoading: false,
};

export const reducer = (state: InitialState, action: any) => {
  switch (action.type) {
    case reducerCases.SET_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    default:
      return state;
  }
};
