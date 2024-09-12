import { configureStore } from '@reduxjs/toolkit'
import TestDrive from './slice/testDriveSlice'
export const store = configureStore({
    reducer: {
        drive:TestDrive
    },
})