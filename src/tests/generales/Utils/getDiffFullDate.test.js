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