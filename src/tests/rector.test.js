const functions = require('../homepage/rector');

var proc1 = {
    TPA: "INSTITUCIONAL",
    ESTADO: "EN PROCESO",
};

var proc2= {
    TPA: "INSTITUCIONAL",
    ESTADO: "EN ESPERA",
};

var proc3 = {
    TPA: "PREGRADO",
};

var proc4 = {
    TPA: "POSTGRADO",
};
    
/////////

test('El proceso corresponde a Pregrado', () => {
    expect(functions.rector(proc3)).toBe(0);
});

test('El proceso corresponde a Postgrado', () => {
    expect(functions.rector(proc4)).toBe(1);
});

test('El proceso corresponde a Institucional', () => {
    expect(functions.rector(proc2)).toBe();
});

test('El proceso corresponde a Institucional en espera', () => {
    expect(functions.rector(proc1)).toBe(2);
});

/////

test('La Id del proceso institucional existe', () => {
    expect(functions.validacion('200')).toBe(false);
});

test('La Id del proceso institucional existe', () => {
    expect(functions.validacion(null)).toBe(true);
});