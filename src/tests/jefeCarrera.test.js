const functions = require('../homepage/jefeCarrera');



// test('CASO 1: Id del proceso indefinido y userInfo Indefinido. No se deben hacer Querys', () => {
//     expect(functions.processDefined(null,null)).toBe(1);
// });

// test('CASO 2: Id del proceso y userInfo definidos. Se deben hacer Querys', () => {
//     expect(functions.processDefined('sss','ssssss')).toBe(0);
// });

// test('CASO 3: Id del Proceso Indefinido y UserInfo Definido. Se debe hacer una Query con los parametros condicionados.', () => {
//     expect(functions.processDefined(null,'ssssss')).toBe(2);
// });

// test('CASO 4: Id del Proceso Definido y UserInfo Indefinido. Se debe hacer una Query con los parametros condicionados.', () => {
//     expect(functions.processDefined('sss',null)).toBe(0);
// });

test('CASO 1: Proceso Definido. Se le debe asignar la info del usuario', () => {
    expect(functions.idProcessDefined('sas')).toBe(1);
});

test('CASO 2: Proceso Definido. Se le debe asignar la info del usuario', () => {
    expect(functions.idProcessDefined(null)).toBe(0);
});