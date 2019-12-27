import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { deleteAppointmentAction } from "../actions/appointmentActions";

function ListAppointment(props) {

  const state = useSelector((state) => state.appointments)
  
  const title = (state.appointments.length === 0) ? 'No hay citas' : 'Administra tus citas aqui'

  const dispatch = useDispatch()

  return (
    <div className="card mt-5">
      <div className="card-body">
        <h2 className="card-title text-center">{title}</h2>
        <div className="date-list">
          {state.appointments.map(appointment => (
            <div className="media mt-3 p-3 bg-secondary" key={appointment.id}>
              <div className="media-body">
                <h3 className="mt-0">{appointment.pet}</h3>
                <p className="card-text"><span>Nombre Dueño:</span>{appointment.owner}</p>
                <p className="card-text"><span>Fecha:</span>{appointment.date}</p>
                <p className="card-text"><span>Hora:</span>{appointment.time}</p>
                <p className="card-text"><span>Sintomas:</span> <br />{appointment.syntoms} </p>
                <button 
                    className="btn btn-danger"
                    onClick={() => dispatch(deleteAppointmentAction(appointment.id))}
                    >Borrar &times;
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ListAppointment;