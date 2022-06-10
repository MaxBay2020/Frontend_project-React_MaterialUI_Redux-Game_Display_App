import {configureStore} from '@reduxjs/toolkit'
import darkModeSlice from "../features/darkMode";

const store = configureStore({
    reducer: {
        darkMode: darkModeSlice,

    },
    middleware: []
})

export default store
