const functions = require('../homepage/dataSource');

test('La informacion del usuario existe', () => {
    expect(functions.dataInstanceOf('asa','asdad')).toBe(1);
});
