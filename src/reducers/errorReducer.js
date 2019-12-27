const initialState = {
  error: false
}

export default function (state = initialState, action) {
  // Action is going to have a type and some data, it's gonna be an object
  switch(action.type){
    case 'VALIDATE_FORM':
      return { 
        ...state,
        error: action.payload
      }
    default:
      return state
  }
}