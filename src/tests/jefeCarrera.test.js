const functions = require('../homepage/jefeCarrera');

test('La informacion del usuario existe', () => {
    expect(functions.idProcessDefined(1)).toBe(1);
});

test('La informacion del usuario existe', () => {
    expect(functions.processDefined(null,null)).toBe(1);
});