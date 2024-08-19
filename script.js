document.getElementById('miFormulario').addEventListener('submit', function(event) {
    let isValid = true;

    //agarro los campos
    const nombre = document.getElementById('nombre');
    const apellido = document.getElementById('apellido');
    const fechaSeleccionada = new Date(
        document.getElementById('fecha').value
    )

    //regex para caracteres validos
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;

    //valido el campo 'nombre'
    if (!regex.test(nombre.value.trim())) {
        isValid = false;
        mostrarError('nombre', 'El nombre solo puede contener letras y espacios.');
    } else {
        ocultarError('nombre');
    }

    //valido el campo 'apellido'
    if (!regex.test(apellido.value.trim())) {
        isValid = false;
        mostrarError('apellido', 'El apellido solo puede contener letras y espacios.');
    } else {
        ocultarError('apellido');
    }

    const hoy = new Date();
    //valido que la fecha sea posterior a la fecha actual
    if (fechaSeleccionada >= hoy){
        isValid = false;
        mostrarError('fecha', 'La fecha debe ser previa a la fecha actual.')
    }
    
    if (!isValid) {//si no es valido, no se envia
        event.preventDefault();
    }
    else{
        event.preventDefault();
        mostrarConfirmacion();
    }
});


function mostrarError(campo, mensaje) {//show mensaje de error
    const errorElement = document.getElementById(campo + '-error');

    if (errorElement){
        errorElement.textContent = mensaje;
        //para el lector de pantalla
        statusMessage.textContent = `Error en el campo ${campo}: ${mensaje}`;
        //muestro el mensaje de error visualmente
        errorElement.style.display = 'block';
    }
}
function ocultarError(campo) {//hide mensaje de error
    const errorElement = document.getElementById(campo + '-error');
    errorElement.style.display = 'none';
}

function mostrarConfirmacion(){//mensaje confirmando el envio del formulario
    //para el lector de pantalla
    const statusMessage = document.getElementById('statusMessage');
    statusMessage.textContent = 'El formulario se envió correctamente.';
    
    //muestro visualmente la confirmacion
    const confirmacion = document.createElement('div');
    confirmacion.className = 'confirmacion';
    confirmacion.textContent = 'El formulario se envió correctamente.';
    document.body.appendChild(confirmacion);
    
    setTimeout(function(){//elimino el mensaje de confirmacion a los 3seg
        confirmacion.remove();
    }, 3000);
}

document.getElementById('cambiarEstilo').addEventListener('click', function() {
    //agarro los campos
    const formContainer = document.querySelector('.form-container');
    
    //cambio el estilo
    if (formContainer.classList.contains('simple')) {
        formContainer.classList.remove('simple');
        formContainer.classList.add('highContrast');
    } else {
        formContainer.classList.remove('highContrast');
        formContainer.classList.add('simple');
    }

});
