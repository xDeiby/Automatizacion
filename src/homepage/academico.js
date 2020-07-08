const academico = (wea) => {
    if (wea == null) {

        // No es relevante para el problema
        // queryLookup = qG.nQueryWhereAnd(
        //     qG.nEqField("IES", 'TRUE', userInfo.iesId, 'int') +
        //     qG.nEqField("ESTADO", null, "EN PROCESO")
        // );

        return 0;

    } else {
        // No es relevante para el problema
        // queryLookup = qG.nQueryWhereAnd(
        //     qG.nAnd(
        //         qG.nEqField("IES", 'TRUE', userInfo.iesId, 'int') +
        //         qG.nEqField("CarreraOPrograma", 'TRUE', carreraId)
        //     ) +
        //     qG.nEqField("ESTADO", null, "EN PROCESO")
        // );

        return 1;
    }
}

// Agregar otras funciones, si se estima conveniente

const functions = {
    academico
};

module.exports = functions;