import { store } from "../redux/store";

export type OperationsType = {
  operator: string;
};

export type NumbersType = string;

export type ButtonType = {
  number: string | null;
  operator: string | null;
};

export type RootState = ReturnType<typeof store.getState>;
