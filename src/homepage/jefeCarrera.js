const processDefined = (idProceso, userInfo) => {
    // var queryLookup = null; No Relevante
    if (idProceso != null) {
        // queryLookup = qG.nQueryWhere(
        //     qG.nEqField("ID", 'TRUE', idProceso, 'int')
        // ); No relevante
        return 0;
    } else {
        if (userInfo == null) {
            // queryLookup = qG.nQueryWhereAnd(
            //     qG.nEqField("IES", 'TRUE', userInfo.iesId, 'int') +
            //     qG.nEqField("ESTADO", null, "EN PROCESO")
            // ); No relevante
            return 1;
        } else { 
            // queryLookup = qG.nQueryWhereAnd(
            //     qG.nAnd(
            //         qG.nEqField("IES", 'TRUE', userInfo.iesId, 'int') +
            //         qG.nEqField("CarreraOPrograma", 'TRUE', carreraId)
            //     ) +
            //     qG.nEqField("ESTADO", null, "EN PROCESO")
            // ); No importa lo que haga, solo nos interesa saber que llegamos aqui
            return 2;
        }   
    }

}

const idProcessDefined = (unidadProceso) => {
    // if (idProceso == null) idProceso = items[0].ID; Siempre estara definido, no relevante
    //var unidadProceso = userInfo.unidad;

    if (unidadProceso) {
        // unidadProceso = items[0].CarreraOPrograma.replace(/(\d*;#)/, "");
        return 1
    } else {
        unidadProceso = userInfo.unidad;
        return 0
    }
}
const functions = {
    processDefined,
    idProcessDefined
};

module.exports = functions;