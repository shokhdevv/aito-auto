import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    model: "",
}


export const testDriveSlice = createSlice({
    name: 'test-drive',
    initialState,
    reducers: {
        selectCar: (state,{payload}) => {
            state.model = payload
        },

    },
})

// Action creators are generated for each case reducer function
export const { selectCar } = testDriveSlice.actions

export default testDriveSlice.reducer