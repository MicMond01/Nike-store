import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  user: ""
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setUser: (state, action) => {
        state.user = action.payload
    },
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, setUser } = counterSlice.actions;

export default counterSlice.reducer;
