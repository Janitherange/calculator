import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type CalculatorState = {
  value: string;
  total: string;
};

const initialState: CalculatorState = {
  value: "",
  total: "",
};

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    operation: (state, action: PayloadAction<string>) => {
      const operatorList = ["+", "-", "*", "/", "."];
      if (
        (operatorList.includes(action.payload) && state.value === "") ||
        (operatorList.includes(action.payload) &&
          operatorList.includes(state.value.slice(-1)))
      ) {
        return;
      }
      state.total = "";

      if (state.value.includes(".") && action.payload === ".") {
        return
      }else{
        state.value += action.payload;
      }
    },
    deletion: (state) => {
      if (state.value === "") {
        return;
      }

      state.value = state.value.slice(0, -1);
    },
    calculate: (state) => {
      const operatorList = ["+", "-", "*", "/", "."];

      if (!operatorList.includes(state.value)) {
        state.total = eval(state.value);
      }
    },
    clear: (state) => {
      state.total = "";
      state.value = "";
    },
  },
});

export const calculatorActions = calculatorSlice.actions;

export default calculatorSlice.reducer;
