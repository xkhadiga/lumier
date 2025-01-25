import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
    name: 'setForm',
    initialState: { modal : null },
    reducers: {
        rdx_setForm: function(state,action){
            state.modal = action.payload
        }
        }
    },
);
export const {rdx_setForm} = formSlice.actions;
export const selectFormType = (state) => state.setForm.modal;

export default formSlice.reducer;