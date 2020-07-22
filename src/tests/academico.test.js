const functions = require('../homepage/academico');

test('CASO 1: UserInfo definido', () => {
    expect(functions.academico('---')).toBe(1);
});

test('CASO 2: UserInfor es un valor Nulo', () => {
    expect(functions.academico(null)).toBe(0);
});