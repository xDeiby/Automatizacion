/**
 * Esta función obtiene el valor de un parametro en la URL
 * El input sParam puede ser por ejemplo ca=1
 * Se asumira una url como sigue: https://acreditaonline.sharepoint.com/SitePages/homePage.aspx?ri=5&mobile=0&ca=1
 * El output esperado es el valor 1 (valor del parametro ca)
 * key: "getUrlParameter",
    value: function getUrlParameter(sParam) {
      var resp = null;
      var sPageUrl = window.location.search.substring(1);
      var sUrlVariables = sPageUrl.split('&');
      
      Array.prototype.slice.call(sUrlVariables).forEach( function(element) {
        var sParameterName = element.split('=');

        if (sParameterName[0] === sParam) {
          resp = sParameterName[1];
        }
    });
      return resp;
    }
 * 
 * 
 */