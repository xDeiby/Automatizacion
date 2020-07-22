const functions = require('../homepage/dataSource');

test('CASO 1: Ambos parametros de la funcion esta definida', () => {
    expect(functions.dataInstanceOf('asa','asdad')).toBe(1);
});

test('CASO 2: El primer parametro de la funcion de nulo y el segundo esta definido', () => {
    expect(functions.dataInstanceOf(null,'asdad')).toBe(0);
});

test('CASO 3: El primer parametro esta definido y el segundo esta indefinido', () => {
    expect(functions.dataInstanceOf(null,null)).toBe(0);
});

test('CASO 4: El primer y segundo parametro estan indefinidos', () => {
    expect(functions.dataInstanceOf(null,null)).toBe(0);
});