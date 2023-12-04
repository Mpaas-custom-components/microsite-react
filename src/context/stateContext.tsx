"use client";
import { createContext, useContext, useReducer, ReactNode } from "react";
import { InitialState } from "./stateReducer";

export const StateContext = createContext<any>(null);

type StateProviderProps = {
  initialState: InitialState;
  reducer: (state: any, action: any) => any;
  children: ReactNode;
};

export const StateProvider: React.FC<StateProviderProps> = ({ initialState, reducer, children }) => {
  return <StateContext.Provider value={useReducer(reducer, initialState)}>{children}</StateContext.Provider>;
};

export const useStateProvider = () => useContext(StateContext);
