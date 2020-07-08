const functions = require('../homepage/academico');

test('La informacion del usuario existe', () => {
    expect(functions.academico('asdasdsad')).toBe(1);
});

test('La informacion del usuario no existe', () => {
    expect(functions.academico(null)).toBe(0);
});