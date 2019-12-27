import React from 'react'
import { Provider } from 'react-redux'

import store from './store'

import AddAppointment from './components/AddAppointment'
import ListAppointment from './components/ListAppointment'

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <header>
          <h1 className="text-center">Administrador de pacientes</h1>
        </header>
        <div className="row">
          <div className="col-md-6">
            <AddAppointment></AddAppointment>
          </div>
          <div className="col-md-6">
            <ListAppointment></ListAppointment>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
