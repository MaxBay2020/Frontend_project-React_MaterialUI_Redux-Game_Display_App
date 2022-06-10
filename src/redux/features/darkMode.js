import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    value: {
        darkMode: false
    }
}

const darkModeSlice = createSlice({
    name: 'darkMode',
    initialState,
    reducers: {
        toggleDarkMode: (darkMode, action) => {
            darkMode.value = action.payload
        }
    }
})

export const {
    toggleDarkMode,

} = darkModeSlice.actions

export default darkModeSlice.reducer
