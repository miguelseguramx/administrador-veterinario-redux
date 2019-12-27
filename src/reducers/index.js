import { combineReducers } from 'redux'
import appointmentReducer from './addAppointmentReducer'
import errorReducer from "./errorReducer";

export default combineReducers({
  appointments: appointmentReducer,
  error: errorReducer
})