import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
    name: 'setForm',
    initialState: { modal : null } || {login : false},
    reducers: {
        rdx_setForm: function(state,action){
            state.modal = action.payload
        },
        rdx_resetForm: function(state,action){
            state.modal = null
        },
        rdx_login:function(state,action){
            state.login = action.payload
        }
        }
    },
);
export const {rdx_setForm, rdx_resetForm, rdx_login} = formSlice.actions;
export const selectFormType = (state) => state.setForm.modal;

export default formSlice.reducer;