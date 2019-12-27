export const getStorage = ()=>{
  const appointmentStorage = localStorage.getItem('appointments')
  if (appointmentStorage === null){
    return undefined
  }
  return JSON.parse(appointmentStorage)
}

export const setStorage = state =>{
  const appointmentState = JSON.stringify(state)
  localStorage.setItem('appointments', appointmentState)
}