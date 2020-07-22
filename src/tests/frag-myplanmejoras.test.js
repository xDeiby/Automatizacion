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

const  {myplanmejoras}  = require('../procesos/frag-myplanmejoras');


    var expected_c1;
    var expected_c2;
    var expected_c3;
    var expected_c4;
    var expected_c5;
    var expected_c6;
    var expected_c7;
    var expected_c8;

    var listaTareas_asumed_c1;
    var listaTareas_asumed_c2; 
    var listaTareas_asumed_c3; 
    var listaTareas_asumed_c4; 
    var listaTareas_asumed_c5; 
    var listaTareas_asumed_c6; 
    var listaTareas_asumed_c7; 
    var listaTareas_asumed_c8; 



beforeAll(() => {

     expected_c1 = 100;
     expected_c2 = 0;
     expected_c3 = 25;
     expected_c4 = 50;
     expected_c5 = 75;
     expected_c6 = 100;
     expected_c7 = 0;
     expected_c8 = 0;

    listaTareas_asumed_c1 = [ //expected output = 100
        {id: 1, AssignedTo: 'Juan', Checkmark: true},
        {id: 2, AssignedTo: 'Pedro',Checkmark: true},
        {id: 3, AssignedTo: 'Diego',Checkmark: true},
        {id: 4, AssignedTo: 'Clara',Checkmark: true}
    ]

    listaTareas_asumed_c2 = [ //expected output = 0
        {id: 1, AssignedTo: 'Juan', Checkmark: false},
        {id: 2, AssignedTo: 'Pedro',Checkmark: false},
        {id: 3, AssignedTo: 'Diego',Checkmark: false},
        {id: 4, AssignedTo: 'Clara',Checkmark: false}
    ]

    listaTareas_asumed_c3 = [ //expected output = 25
        {id: 1, AssignedTo: 'Juan', Checkmark: true},
        {id: 2, AssignedTo: 'Pedro',Checkmark: false},
        {id: 3, AssignedTo: 'Diego',Checkmark: false},
        {id: 4, AssignedTo: 'Clara',Checkmark: false}
    ]

    listaTareas_asumed_c4 = [ //expected output = 50
        {id: 1, AssignedTo: 'Juan', Checkmark: true},
        {id: 2, AssignedTo: 'Pedro',Checkmark: false},
        {id: 3, AssignedTo: 'Diego',Checkmark: false},
        {id: 4, AssignedTo: 'Clara',Checkmark: true}
    ]

    listaTareas_asumed_c5 = [ //expected output = 75
        {id: 1, AssignedTo: 'Juan', Checkmark: true},
        {id: 2, AssignedTo: 'Pedro',Checkmark: true},
        {id: 3, AssignedTo: 'Diego',Checkmark: false},
        {id: 4, AssignedTo: 'Clara',Checkmark: true}
    ]

    
    listaTareas_asumed_c6 = [ //expected output = 100
        {id: 1, AssignedTo: 'Juan', Checkmark: true},
    ]
    
    listaTareas_asumed_c7 = [ //expected output = 0
        {id: 1, AssignedTo: 'Juan', Checkmark: false},
    ]


    listaTareas_asumed_c8 = [] //expected output = 0
    
})

test('CASO 1: myplanmejoras.js => porcentaje tareas completadas deberia ser 100', () => {
    expect(myplanmejoras(listaTareas_asumed_c1)).toBe(expected_c1);
});

test('CASO 2: myplanmejoras.js => porcentaje tareas completadas deberia ser 0', () => {
    expect(myplanmejoras(listaTareas_asumed_c2)).toBe(expected_c2);
});

test('CASO 3: myplanmejoras.js => porcentaje tareas completadas deberia ser 25', () => {
    expect(myplanmejoras(listaTareas_asumed_c3)).toBe(expected_c3);
});

test('CASO 4: myplanmejoras.js => porcentaje tareas completadas deberia ser 50', () => {
    expect(myplanmejoras(listaTareas_asumed_c4)).toBe(expected_c4);
});

test('CASO 5: myplanmejoras.js => porcentaje tareas completadas deberia ser 75', () => {
    expect(myplanmejoras(listaTareas_asumed_c5)).toBe(expected_c5);
});

test('CASO 6: myplanmejoras.js => porcentaje tareas completadas deberia ser 100', () => {
    expect(myplanmejoras(listaTareas_asumed_c6)).toBe(expected_c6);
});

test('CASO 7: myplanmejoras.js => porcentaje tareas completadas deberia ser 0', () => {
    expect(myplanmejoras(listaTareas_asumed_c7)).toBe(expected_c7);
});

test('CASO 8: myplanmejoras.js => porcentaje tareas completadas deberia ser 0', () => {
    expect(myplanmejoras(listaTareas_asumed_c8)).toBe(expected_c8);
});