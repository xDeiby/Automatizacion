/* Autoev interna */

// userInfo => Variable global desde base.js atrib -> (ies, rol, unidad)

$(document).ready(function () {
    loadedBase.then(function () {
        var dataSources = new DataSources();
        var qG = new GeneradorQueries();
        var firstTime = [true, true, true];

        // Obtener parametros desde URL
        // Obtener id de proceso desde URL (param pr)
        var idProceso = Utils.getUrlParameter("pr");

        //Buscar en lista PROCESO los procesos asociados a la IES y carrera
        // TODO controlar para proceso institucionales
        var queryLookup = null;
        if (idProceso != null) {
            queryLookup = qG.nQueryWhere(
                qG.nEqField("ID", 'TRUE', idProceso, 'int')
            );
        } else {
            if (userInfo.unidadId == null) {
                queryLookup = qG.nQueryWhereAnd(
                    qG.nEqField("IES", 'TRUE', userInfo.iesId, 'int') +
                    qG.nEqField("ESTADO", null, "EN PROCESO")
                );
            } else { 
                queryLookup = qG.nQueryWhereAnd(
                    qG.nAnd(
                        qG.nEqField("IES", 'TRUE', userInfo.iesId, 'int') +
                        qG.nEqField("CarreraOPrograma", 'TRUE', carreraId)
                    ) +
                    qG.nEqField("ESTADO", null, "EN PROCESO")
                );
            }   
        }

        var viewFields = qG.nViewFields(
            qG.nFieldRef("IES") +
            qG.nFieldRef("CarreraOPrograma") +
            qG.nFieldRef("ESTADO") +
            qG.nFieldRef("avance") +
            qG.nFieldRef("TPA")
        );

        var p = dataSources.getListaProceso(queryLookup, viewFields);
        p.done(function () {
            var items = dataSources.xmlToJson(p.responseXML);
            if (items.length == 0) {
                $('.content-background').html('<div class="grid-1-noGutter-middle"><col><h2>Proceso no existe para la carrera asociada al usuario.</h2></col></div>');
                return false;
            }
            
            var unidadProceso = "";
            if (items[0].CarreraOPrograma != null) {
                unidadProceso = items[0].CarreraOPrograma.replace(/(\d*;#)/, "");
            }
            var tipoProceso = items[0].TPA.replace(/(\d*;#)/, "");
            var ies = items[0].IES.replace(/(\d*;#)/, "");
            if (idProceso == null) {
                idProceso = items[0].ID;
                Utils.addParameterToUrl("pr", idProceso, null, true); // chg
            }

            // Establecer links barra de navegación
            setNavLinks();

            $('#lbl-tipo-acred').text(tipoProceso);
            if (unidadProceso == "") $('#lbl-ant-nombre-carrera').text("");
            $('#lbl-nombre-carrera').text(unidadProceso);
            $('#lbl-nombre-universidad').text(ies);

            // Consultar en la lista de tareas por un proceso especifico
            var queryLookup = qG.nQueryWhere(
                qG.nEqField("PROCESO", 'TRUE', idProceso, 'int')
            );
            var viewFields = qG.nViewFields(
                qG.nFieldRef("Checkmark") +
                qG.nFieldRef("Status") +
                qG.nFieldRef("DueDate") +
                qG.nFieldRef("AssignedTo") +
                qG.nFieldRef("CATEGORIA")
            );
            var queryOptions = qG.nQueryOptions(
                qG.nIncludeAttachmentUrls('FALSE')
            );
            //Buscar en la lista Tareas las tareas asociadas al procesos previamente encontrado
            var p1 = dataSources.getListaPlanMejoras(queryLookup, viewFields, queryOptions);
            p1.done(function () {
                var tareasTotales = dataSources.getTotalCountItems(p1.responseXML);
                var tareasPersonal = 0;
                var listaTareas = dataSources.xmlToJson(p1.responseXML);
                var compCont = 0;
                var compContP = 0;
                var retrCont = 0;
                var aplaCont = 0;
                var encuCont = 0;
                var noInitCont = 0;
                var listaPersonas = [];

                Array.prototype.slice.call(listaTareas).forEach(function (_tarea) {
                    if (Utils.getBool(_tarea.Checkmark)) compCont++;
                    var personId = Utils.getId(_tarea.AssignedTo);
                    if (!listaPersonas.includes(personId)) listaPersonas.push(personId);
                });

                var avanceG = Math.round((compCont * 100) / tareasTotales);
                if (isNaN(avanceG)) avanceG = 0;

                $("#lbl-nro-personas").text(listaPersonas.length);
                $("#lbl-tareas-completadas").text(compCont + " tareas completadas");
                $("#lbl-avance-tareas").text("AVANCE " + avanceG + "%");

            });
        });

    });
});