import React, {Fragment, useState} from 'react';
import uuid from 'uuid/v4';

const Formulario = ({crearCita}) => {
    // Crear state en cita
    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });
    const [error, actualizarError] = useState(false);
    // Funcion que se ejecuta cada que el usuario escribe un input
    const actualizarState = e => {
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        });
    };
    // Extraer los valores
    const {mascota, propietario, fecha, hora, sintomas} = cita;
    // Cuando el usuario preciona agregar cita
    const submitCita = e => {
        e.preventDefault();
        //   Validar
        if (
            mascota.trim() === '' ||
            propietario.trim() === '' ||
            fecha.trim() === '' ||
            hora.trim() === '' ||
            sintomas.trim() === ''
        ) {
            actualizarError(true);
            return;
        }
        // Eliminar el mensaje previo
        actualizarError(false);
        // Asignar un ID
        cita.id = uuid();
        // Crear la cita
        crearCita(cita);
        // Reiniciar el form
        actualizarCita({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        })
    };
    return (
        <Fragment>
            <h2>Crear citas</h2>
            {error ? <p className='alerta-error'>Todos los campos son obligatorios</p> : null}
            <form onSubmit={submitCita}>
                <label htmlFor="">Nombre de Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre de mascota"
                    onChange={actualizarState}
                    value={mascota}
                />
                <label htmlFor="">Nombre Dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre del dueño de la mascota"
                    onChange={actualizarState}
                    value={propietario}
                />
                <label htmlFor="">Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                />
                <label htmlFor="">Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                />
                <label htmlFor="">Sintomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={actualizarState}
                    value={sintomas}
                ></textarea>
                <button type="submit" className="u-full-width button-primary">
                    Agregar Citas
                </button>
            </form>
        </Fragment>
    );
};

export default Formulario;
