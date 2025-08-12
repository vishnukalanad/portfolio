import {createSlice} from "@reduxjs/toolkit";

export const MODAL_TYPES = {
    NONE: "none",
    INFORMATION: "information",
    PROJECT: "project"
}

const initialState = {
    modalOpen: true,
    modalType: MODAL_TYPES.PROJECT,
    modalData: {
        information: null,
        projectData: {
            name: "eRupee Support Portal",
            description: "A secure, multi-tenant web platform designed for bank operations teams to efficiently manage e₹ (Digital Rupee) transactions, generate operational and compliance reports, and handle customer complaints. Built for multiple banking institutions, the system enables consistent processes across clients while allowing each bank to operate independently within its own secure environment.",
            keyPoints: [
                "Led design and development of a multi-tenant CBDC Support Portal frontend, deployed across three banks, ensuring seamless multi-client support.",
                "Integrated 30+ REST APIs enabling real-time support, interactive dashboards, complaint, and transaction management.",
                "Improved operational efficiency through automated report generation workflows and role-based access control.",
                "Coordinated frequent stakeholder engagement and secured production sign-offs from all banks, ensuring successful rollout and adoption.",
            ],
            clients: ["The Federal Bank of India", "Indian Bank", "Karnataka Bank"],
            stack: ["Angular", "Golang", "Postgresql"]
        },
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
        openProjectModal: (state) => {
            state.modalOpen = true;
            state.modalType = MODAL_TYPES.PROJECT;
        },
        addProjectData: (state, action) => {
            state.projectData = action.payload;
        },
        clearProjectData: (state) => {
            state.projectData = null;
        }
    }
})

export const userActions = userSlice.actions;

export default userSlice.reducer;