document.querySelector('#generar-nombre').addEventListener('submit', cargarNombres);

function cargarNombres(e) {
    e.preventDefault();

    const origen = document.getElementById('origen');
    const origenSeleccionado = origen.options[origen.selected].value;

    const genero = document.getElementById('genero');
    const generoSeleccionado = genero.options[genero.selected].value;

    const cantidad = document.getElementById('numero').value;

    let url = '';
    url += 'http://uinames.com/api/?';

    if(origenSeleccionado !== '') {
        url += `region=${origenSeleccionado}&`;
    }

    if(generoSeleccionado !== '') {
        url += `gender=${generoSeleccionado}&`;
    }

    if(cantidad !== '') {
        url += `amount=${cantidad}`;
    }
}