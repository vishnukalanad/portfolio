import {createSlice} from "@reduxjs/toolkit";

export const MODAL_TYPES = {
    NONE: "none",
    INFORMATION: "information",
    PROJECT: "project"
}

const initialState = {
    modalOpen: false,
    modalType: MODAL_TYPES.NONE,
    modalData: {
        information: null,
        projectData: null,
    }
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        openModal: (state) => {
            state.modalOpen = true;
        },
        closeModal: (state) => {
            state.modalOpen = false;
        },
        openProjectData: (state, action) => {
            state.modalData.projectData = action.payload;
            state.modalOpen = true;
            state.modalType = MODAL_TYPES.PROJECT;
        },
    }
})

export const userActions = userSlice.actions;

export default userSlice.reducer;