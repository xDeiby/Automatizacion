/*


Esta función recibe como input una fecha con el formato "2015-05-15"
Entrega como output "15-05-2015"

Conclusión: invierte las fechas desde formato usa a chileno (dia-mes-año)

key: "getDate",
    value: function getDate(fecha) {
      if (fecha) {
        var f = fecha.split(" ")[0].split("-");
        return f[2] + '-' + f[1] + '-' + f[0];
      }

      return '-';
    }
*/


const  {getDate}  = require('../generales/Utils');



var fecha_c1;
var fecha_c2;
var fecha_c3;
var fecha_c4;
var fecha_c5;
var fecha_c6;
var fecha_c7;

var expected_c1;
var expected_c2;
var expected_c3;
var expected_c4;
var expected_c5;
var expected_c6;
var expected_c7;

beforeAll(() => {
  fecha_c1 = "2015-05-15";
  fecha_c2 = "15-05-2015";
  fecha_c3 = "2015/05/15";
  fecha_c4 = "Other string";
  fecha_c5 = "";
  fecha_c6 = null;
  fecha_c7 = 2015;


  expected_c1 = "15-05-2015";
  expected_c2 = "15-05-2015";
  expected_c3 = "15-05-2015";
  expected_c4 = "-";
  expected_c5 = "-";
  expected_c6 = "-";
  expected_c7 = "-";


});


test('Utils.js => getDate => fecha deberia ser: 2015-05-15', () => {
  expect(getDate(fecha_c1)).toBe(expected_c1);
});

test('Utils.js => getDate => funcion recibe como input "15-05-2015" ', () => {
  expect(getDate(fecha_c2)).toBe(expected_c2);
});

test('Utils.js => getDate => funcion recibe como input "2015/05/15"', () => {
  expect(getDate(fecha_c3)).toBe(expected_c3);
});

test('Utils.js => getDate => funcion recibe como input "Other string"', () => {
  expect(getDate(fecha_c4)).toBe(expected_c4);
});

test('Utils.js => getDate => funcion recibe como input ""', () => {
  expect(getDate(fecha_c5)).toBe(expected_c5);
});

test('Utils.js => getDate => funcion recibe como input null', () => {
  expect(getDate(fecha_c6)).toBe(expected_c6);
});

test('Utils.js => getDate => funcion recibe como input un int', () => {
  expect(getDate(fecha_c7)).toBe(expected_c7);
});
