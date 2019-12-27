import { createStore } from 'redux'
import reducer from './reducers/index'

import { getStorage, setStorage } from "./localstorage";

// Define an initial state
// const initialState = []
const storageState = getStorage()

const store = createStore(
  reducer,
  storageState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe( () =>{
  setStorage({
    appointments: store.getStat().appointments
  })
})

export default store