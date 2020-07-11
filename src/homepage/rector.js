//Array.prototype.slice.call(procesos).forEach( function(proceso) {
const rector = (proceso) => {
	if (proceso.TPA == "PREGRADO"){
		//if (proceso.TPA.replace(/(\d*;#)/, "") == "PREGRADO") {
        //idPre = Utils.getId(proceso.TPA); 
        //contPregrado++;
		return 0;
    }
	if (proceso.TPA == "POSTGRADO"){
		//if (proceso.TPA.replace(/(\d*;#)/, "") == "POSTGRADO") {
         //idPost = Utils.getId(proceso.TPA); 
         //contPostgrado++; 
		return 1;
    }
	if (proceso.TPA == "INSTITUCIONAL"){
		//if (proceso.TPA.replace(/(\d*;#)/, "") == "INSTITUCIONAL") {
		if (proceso.ESTADO == "EN PROCESO"){
			//if (proceso.ESTADO == "EN PROCESO") { // TODO revisar elección de proceso inst.
			//idInst = Utils.getId(proceso.TPA);
			//idProInst = proceso.ID;
			return 2;
        }
    }
}

	
const validacion = (idInst) => {	
	if (idInst != null) {
		//if (idInst !== null) {
        //$('#btn-detalle-inst').attr("onclick", "loadOverviewInstitucional(" + idInst + ", " + idProInst + ")");
		return false;
	} else {
        //$('#btn-detalle-inst').attr("disabled", true);
		return true;
    }
}

const functions = {
    rector,
    validacion
};

module.exports = functions;