export const addAppointmentAction = appointment => {
  return{
    type: 'NEW_APPOINTMENT',
    payload: appointment
  }
}

export const deleteAppointmentAction = id => {
  return{
    type: 'DELETE_APPOINTMENT',
    payload: id
  }
}