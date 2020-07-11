
const myplanmejoras = (listaTareas_asumed) => {
    var tareasTotales = listaTareas_asumed.length;
    var listaTareas = listaTareas_asumed
    var compCont = 0;
    var listaPersonas = [];

    Array.prototype.slice.call(listaTareas).forEach(function (_tarea) {
        if (_tarea.Checkmark) compCont++;
        //var personId = Utils.getId(_tarea.AssignedTo);
        //if (!listaPersonas.includes(personId)) listaPersonas.push(personId);
    });

    var avanceG = Math.round((compCont * 100) / tareasTotales);
    if (isNaN(avanceG)) avanceG = 0;

    return avanceG;
}


module.exports = {myplanmejoras};