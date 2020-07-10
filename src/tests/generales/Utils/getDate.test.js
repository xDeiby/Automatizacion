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