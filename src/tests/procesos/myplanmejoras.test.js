/* 
    planmejoras.js, myplanmejoras.js

    En este caso haria falta testear el siguiente fragmento de código dentro de una función extraña
    Si el numero de tareas >= 1 todo bien en el funcionamiento, si no comienzan los errores.
    Por esto se van a diseñar 3 casos con diferentes valores para la cantidad de tareas totales: (se asume que un array no puede tener un length negativo por lo tanto ese caso no se considera)

    1) Un numero entero positivo muy grande
    2) Un numero entero positivo cercano a 1
    3) Con valor 0

    Lista tareas sera un array de objetos tareas (simplificado) con los siguientes valores: (para el caso cuando hay tareas)
        const tarea = {id: number, Checkmark: bool};
        const listaTareas_asumed = [
            {id: 1, AssignedTo: 'Juan', Checkmark: true},
            {id: 2, AssignedTo: 'Pedro',Checkmark: false},
            {id: 3, AssignedTo: 'Diego',Checkmark: false},
            {id: 4, AssignedTo: 'Clara',Checkmark: true}
        ]

                var tareasTotales = listaTareas_asumed.length;
                var tareasPersonal = 0;
                var listaTareas = listaTareas_asumed
                var compCont = 0;
                var compContP = 0;
                var retrCont = 0;
                var aplaCont = 0;
                var encuCont = 0;
                var noInitCont = 0;
                var listaPersonas = [];

                Array.prototype.slice.call(listaTareas).forEach(function (_tarea) {
                    if (_tarea.Checkmark) compCont++;
                    var personId = Utils.getId(_tarea.AssignedTo);
                    if (!listaPersonas.includes(personId)) listaPersonas.push(personId);
                });

                var avanceG = Math.round((compCont * 100) / tareasTotales);
                if (isNaN(avanceG)) avanceG = 0;

*/