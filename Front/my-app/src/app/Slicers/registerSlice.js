import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Register  } from "../API/registerAPI";

const initialState = {
   register:[]
};
// register the user to the website
export const RegisterAsync = createAsyncThunk(
    "register/Register",
    async (registerData) => {
      const response = await Register(registerData);
      console.log(response)
      return response.data;
    }
);
  
  export const registerSlice = createSlice({
    name: "register",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(RegisterAsync.fulfilled, (state, action) => {
        state.register = action.payload;
      });
    },
  });
  


export const selectRegister = (state) => state.register.register
export default registerSlice.reducer;