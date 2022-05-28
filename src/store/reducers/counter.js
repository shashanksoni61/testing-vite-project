import { createSlice } from "@reduxjs/toolkit";

const counter = createSlice({
  name: "counter",
  initialState: {
    counter: 0,
  },

  reducers: {
    increaseCounter: (state) => {
      return { ...state, counter: state.counter + 1 };
    },
    decreaseCounter: (state) => {
      return { ...state, counter: state.counter - 1 };
    },
  },
});

export const selectCounterState = (state) => state.counter;
export const { increaseCounter, decreaseCounter } = counter.actions;
export default counter.reducer;
