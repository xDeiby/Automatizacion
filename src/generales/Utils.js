

const getDate = (fecha) => {
    if(fecha){
        let f = fecha.split('-');
        return f[2] + '-' + f[1] + '-' + f[0];
    } else {
        return '-';
    }
}


 const getUrlParameter = (url, sParam) => {
    let resp = null;
    let sPageUrl = url;
    var sUrlVariables = sPageUrl.split('&');

    Array.prototype.slice.call(sUrlVariables).forEach( function(element) {
        var sParameterName = element.split('=');
    
        if (sParameterName[0] === sParam) {
          resp = sParameterName[1];
        }
    });
    
    
    return resp;
}


const getDiffFullDate = (start, end) => {
    let diff = end.getTime() - start.getTime();
    let diffDias = parseInt(diff / (1000 * 60 * 60 * 24));
    let a = parseInt(diffDias / 365);
    let m = parseInt(diffDias % 365 / 30);
    let d = diffDias % 365 % 30; 

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


module.exports = {getDiffFullDate, getUrlParameter, getDate }