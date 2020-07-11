/*

    time.getTime() = retorna cantidad de milisegundos
    diff = almacena la diferencia en milisegundos entre 2 fechas
    diffDias = almacena un numero entero de la cantidad de dias que separa ambas fechas
    a = almacena un numero entero con la cantidad de años que hay entre fechas
    m = almacena un numero entero sobre la cantidad de meses que hay entre fechas
    error de programacion #d = almacena numero entero de dias que separa las fechas (error lo hace nuevamente lo considero innecesario)

    Se asume que start debe ser mayor a end en terminos de "fecha", habria que probar estos casos

    Con el siguiente input:

      var start = new Date();
      end.setFullYear(2018, 9, 1);

      var end = new Date();
      end.setFullYear(2020, 11, 3);

    Se retorna un string como sigue "2 años, 2 meses, 2 dias"


    Casos a evaluar: 
      1) Las fechas son lejanas entre si => start = setFullYear(2009, 11, 3); end = setFullYear(2020, 11, 3);
      2) Las fechas son iguales => start = setFullYear(2020, 11, 3); end = setFullYear(2020, 11, 3);
      3) La fecha de start es mas vieja que la fecha de end : start setFullYear(2020, 11, 3); end = setFullYear(2018, 11, 3);

    key: "getDiffFullDate",
    value: function getDiffFullDate(start, end) {
      var diff = end.getTime() - start.getTime();
      var diffDias = parseInt(diff / (1000 * 60 * 60 * 24));
      var a = parseInt(diffDias / 365);
      var m = parseInt(diffDias % 365 / 30);
      var d = diffDias % 365 % 30;
      if (isNaN(a)){
        a = 0;
      } else if (a < 0) {
        a = 0;
      }
      if (isNaN(m)){
        m = 0;
      } else if (m < 0) {
        m = 0;
      }
      if (isNaN(d)){
        d = 0;
      } else if (d < 0) {
        d = 0;
      }
      return a + " años, " + m + " meses, " + d + " días";
    }


*/



const  {getDiffFullDate}  = require('../generales/Utils');

var start1;
var end1;
var expected_c1;

var start2;
var end2;
var expected_c2;

var start3;
var end3;
var expected_c3;


beforeAll(() => {

  start1 = new Date(2009, 11, 3);
  end1 = new Date(2020, 11, 3);
  expected_c1 = "11 años, 0 meses, 3 días";

  start2 = new Date(2020, 11, 3);
  end2 = new Date(2020, 11, 3);
  expected_c2 = "0 años, 0 meses, 0 días";

  start3 = new Date(2020, 11, 3);
  end3 = new Date(2018, 11, 3);
  expected_c3 = "0 años, 0 meses, 0 días";

  start4 = new Date(2020, 11, 3);
  end4 = null;
  expected_c4 = "0 años, 0 meses, 0 días";

  start5 = null
  end5 = new Date(2020, 11, 3);
  expected_c5 = "0 años, 0 meses, 0 días";

  start6 = null
  end6 = null
  expected_c6 = "0 años, 0 meses, 0 días";

  start7 = new Date(2020, 1, 3, [10, 5,3])
  end6 = new Date(2021, 1, 3, [12, 5,3])
  expected_c6 = "1 años, 0 meses, 0 días";

});

test('Utils.js => getDiffFullDate => las fechas son lejanas, 11 años lejanas (2009-2020)', () => {
  expect(getDiffFullDate(start1,end1)).toBe(expected_c1);
});

test('Utils.js => getDiffFullDate => las fechas son iguales', () => {
  expect(getDiffFullDate(start2,end2)).toBe(expected_c2);
});

test('Utils.js => getDiffFullDate => La fecha de inicio es mas vieja que la fecha de fin', () => {
  expect(getDiffFullDate(start3,end3)).toBe(expected_c3);
});

test('Utils.js => getDiffFullDate => La fecha de inicio es correcta, la fecha de termino es null', () => {
  expect(getDiffFullDate(start4,end4)).toBe(expected_c4);
});

test('Utils.js => getDiffFullDate => La fecha de inicio es null la fecha de termino es correcta', () => {
  expect(getDiffFullDate(start5,end5)).toBe(expected_c5);
});

test('Utils.js => getDiffFullDate => La fecha de inicio y la fecha de termino son null', () => {
  expect(getDiffFullDate(start5,end5)).toBe(expected_c5);
});

test('Utils.js => getDiffFullDate => Las fechas se separan por 1 año y 2 horas', () => {
  expect(getDiffFullDate(start5,end5)).toBe(expected_c5);
});

