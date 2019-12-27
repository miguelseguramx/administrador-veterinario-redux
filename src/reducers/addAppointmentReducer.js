const initialState = {
  appointments: []
}

export default function (state = initialState, action) {
  // Action is going to have a type and some data, it's gonna be an object
  switch(action.type){
    case 'NEW_APPOINTMENT':
      return { 
        ...state,
        appointments: [...state.appointments, action.payload]
      }
    case 'DELETE_APPOINTMENT':
      return { 
        ...state,
        appointments: state.appointments.filter(appointment => appointment.id !== action.payload)
      }
    
    default:
      return state
  }
}

