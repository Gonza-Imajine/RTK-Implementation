import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux toolkit nos permite escribir logica mutable en los reducers.
      // Aunque en realidad no muta los estados pues usa la libreria immer
      // la cual detecta cambios en una especie de borrador y produce un nuevo estado inmutable
      // basado en esos cambios.
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})
// Actios creators son generados para cada uno de los casos de la funcion reducer
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer