import { configureStore } from '@reduxjs/toolkit'
import reducers from './reducers/MyHabitSlice'

export default configureStore({
    reducer: {
        habits: reducer,
        
    }
})