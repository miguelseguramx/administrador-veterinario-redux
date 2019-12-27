import React, { useState } from 'react';
import uuid from 'uuid/v4'

import { useDispatch, useSelector } from 'react-redux'
import { addAppointmentAction } from "../actions/appointmentActions";
import { errorActions } from "../actions/errorActions";

import Error from './Error'

function AddAppointment(props) {

	// Component State
	const [ pet, setPet ] = useState('')
	const [ owner, setOwner ] = useState('')
	const [ date, setDate ] = useState('')
	const [ time, setTime ] = useState('')
	const [ syntoms, setSyntoms ] = useState('')

  // Dispatch to execute our actions
  const dispatch = useDispatch()
  const addAppointment = (appointment) => dispatch(addAppointmentAction(appointment))
  const validateForm = (state) => dispatch(errorActions(state))

  // Handle Error
  //  useSelector is similar to mapStateToProps
  const error = useSelector( state => state.error)

  // 

	const submitNewAppointment = e =>{
		e.preventDefault()
    
  // Validate

  if(pet.trim() === '' || owner.trim() === '' || date === '' || time === '' || syntoms === ''){
    validateForm(true)
    return
  }

  validateForm(false)

  // Create New appointment
  addAppointment({
    id: uuid(),
    pet,
    owner,
    date,
    time,
    syntoms
  })
    
		// Restart the form
  
    setPet('')
    setOwner('')
    setDate('')
    setTime('')
    setSyntoms('')
	}

	return (
		<div className="card mt-5">
			<div className="card-body">
				<h2 className="card-title text-center mb-5">Agrega las citas aqui</h2>
				<form onSubmit={submitNewAppointment}>
					<div className="form-group row">
						<label className="col-sm-4 col-lg-2 col-form-label">Nombre Mascota</label>
						<div className="col-sm-8 col-lg-10">
							<input 
								type="text" 
								className="form-control" 
								placeholder="Nombre de la mascota" 
								name='pet'
								value={pet}
								onChange={ e => setPet(e.target.value)}
							/>
						</div>
					</div>
					<div className="form-group row">
						<label className="col-sm-4 col-lg-2 col-form-label">Nombre Dueño</label>
						<div className="col-sm-8 col-lg-10">
							<input 
								type="text" 
								className="form-control"  
								placeholder="Nombre del dueño"
								name='owner'
								value={owner}
								onChange={ e => setOwner(e.target.value)}
							/>
						</div>
					</div>

					<div className="form-group row">
						<label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
						<div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
							<input 
								type="date" 
								className="form-control"
								name='date'
								value={date}
								onChange={ e => setDate(e.target.value)}
							/>
						</div>                            

						<label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
						<div className="col-sm-8 col-lg-4">
							<input 
								type="time" 
								className="form-control" 
								name='time'
								value={time}
								onChange={ e => setTime(e.target.value)}
							/>
						</div>
					</div>
					
					<div className="form-group row">
						<label className="col-sm-4 col-lg-2 col-form-label">Sintomas</label>
						<div className="col-sm-8 col-lg-10">
							<textarea 
								className="form-control"
								name='syntoms'
								value={syntoms}
								onChange={ e => setSyntoms(e.target.value)}
							></textarea>
						</div>
					</div>
					<div className="form-group row justify-content-end">
						<div className="col-sm-3">
							<button type="submit" className="btn btn-success w-100">Agregar</button>
						</div>
					</div>
				</form>
        { error.error ? <Error message= {'Todos los campos son obligatorios'} /> : null}
			</div>
		</div>
	);
}

export default AddAppointment;