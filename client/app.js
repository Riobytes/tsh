
var app = angular.module("myApp", ['angularUtils.directives.dirPagination'])

function ApiUrl() {

    var url;
    var urlUser;

    // JAIRO SERVIDOR
    //url = "http://52.173.139.76:3000/api/";
    //urlUser = "http://52.173.139.76:3000/users/";

    // JUAN SERVIDOR
    //url = "http://52.170.98.93:3000/api/";
    //urlUser = "http://52.170.98.93:3000/users/";

    //Movil
    url = "http://52.170.98.93:3001/api/";
    urlUser = "http://52.170.98.93:3001/users/";

    //url = "http://localhost:3000/api/";
    //urlUser = "http://localhost:3000/users/";

    ////ejemplo a seguir
    //this.getUser = function () {
    //    return 'http://13.67.221.169:3001/api/getAllPropietario';
    //}

    /////////////////////////////////////////////////////////////////////////

    //Ingreso user
    this.getUrlRegisterUser = function () {
        return (urlUser + 'register');
    }

    //Modificar user
    this.getUrlModificarUser = function () {
        return (urlUser + 'updateUser');
    }

    // Autenticacion 
    this.getUrlAutenticar = function () {
        return (urlUser + 'autenticacion');
    }

    // Autenticacion Perfil
    this.getUrlPerfil = function () {
        return (urlUser + 'perfil');
    }

    /////////////////////////////////////////////

    // Ingreso Estado Embarcacion
    this.getUrlIngresoEstadoEmbarcacion = function () {
        return (url + 'saveEstadoEmbarcacion');
    }

    // Modificar Estado Embarcacion
    this.getUrlModificarEstadoEmbarcacion = function () {
        return (url + 'updateEstadoEmbarcacion');
    }

    // Buscar por Descripcion Estado Embarcacion
    this.getUrlBuscarDescripcionEstadoEmbarcacion = function () {
        return (url + 'getByDescripcionEstadoEmbarcacion');
    }

    // Buscar por ID Estado Embarcacion
    this.getUrlBuscarIdEstadoEmbarcacion = function () {
        return (url + 'getByIdEstadoEmbarcacion');
    }

    // Buscar todos los Estado Embarcacion Disponibles
    this.getUrlAllEstadoEmbarcacionDisponible = function () {
        return (url + 'getEstadoEmbarcacionDisponible');
    }

    //////////////////////////////////////////////////////////////////////

    // Buscar por ID Embarcacion
    this.getUrlIdEmbarcacion = function () {
        return (url + 'getByIdEmbarcacion');
    }

    // Buscar todos los Estado Embarcacion Disponibles y Viajes
    this.getUrlAllEstadoEmbarcacionDisponibleViaje = function () {
        return (url + 'getEstadoEmbarcacionDisponibleViaje');
    }

    // Buscar todos los Estado Embarcacion Activos
    this.getUrlAllEstadoEmbarcacionActivos = function () {
        return (url + 'getAllEstadoEmbarcacionActivos');
    }

    // Buscar todos los Estado Embarcacion
    this.getUrlAllEstadoEmbarcacion = function () {
        return (url + 'getAllEstadoEmbarcacion');
    }
    //////////////////////////////////////////////////////

    // Ingreso Estado Orden Servicio
    this.getUrlIngresoEstadoOrden = function () {
        return (url + 'saveEstadoOrden');
    }

    // Modificar Estado Orden Servicio
    this.getUrlModificarEstadoOrden = function () {
        return (url + 'updateEstadoOrden');
    }

    // Buscar todos los Estado Orden Servicio
    this.getUrlAllEstadoOrden = function () {
        return (url + 'getAllEstadoOrden');
    }
    //////////////////////////////////////////////////////

    // Ingreso Tipo Material Petreo
    this.getUrlIngresoTipoMaterialPetreo = function () {
        return (url + 'saveTipoMaterialPetreo');
    }

    // Modificar Tipo Material Petreo
    this.getUrlModificarTipoMaterialPetreo = function () {
        return (url + 'updateTipoMaterialPetreo');
    }

    // Buscar Tipo Material Petreo
    this.getUrlBuscarTipoMaterialPetreo = function () {
        return (url + 'getByIdTipoMaterialPetreo');
    }

    // Buscar todos los Tipo Material Petreo Activos
    this.getUrlAllTipoMaterialPetreoActivos = function () {
        return (url + 'getAllTipoMaterialPetreoActivos');
    }

    // Buscar todos los Tipo Material Petreo
    this.getUrlAllTipoMaterialPetreo = function () {
        return (url + 'getAllTipoMaterialPetreo');
    }
    //////////////////////////////////////////////////////

    //Ingreso Pedido
    this.getUrlIngresoPedido = function () {
        return (url + 'savePedido');
    }

    // Modificar Pedido
    this.getUrlModificarPedido = function () {
        return (url + 'updatePedido');
    }

    // Buscar todos los Pedido
    this.getUrlAllPedido = function () {
        return (url + 'getAllPedido');
    }
    ///////////////////////////////////////////////////////////

    //Ingreso Orden de Servicio
    this.getUrlIngresoOrdenServicio = function () {
        return (url + 'saveOrdenServicio');
    }

    // Modificar Orden de Servicio
    this.getUrlModificarOrdenServicio = function () {
        return (url + 'updateOrdenServicio');
    }

    // filtrar Orden de Servicio por estados Viaje y Proceso
    this.getUrlBuscarOrdenServicioEstadoViajeProceso = function () {
        return (url + 'getOrdenServicioEstadoViajeProceso');
    }

    // Buscar Orden de Servicio por ID
    this.getUrlBuscarOrdenServicio = function () {
        return (url + 'getByIdOrdenServicio');
    }

    // Buscar Orden de Servicio por Numero de Orden
    this.getUrlBuscarOrdenServicioNumeroOrden = function () {
        return (url + 'getByNumeroOrdenServicio');
    }

    // Buscar todos los Orden de Servicio
    this.getUrlAllOrdenServicio = function () {
        return (url + 'getAllOrdenServicio');
    }
    ///////////////////////////////////////////////////////////

    //Ingreso Contrato Recepcion
    this.getUrlIngresoContratoRecepcion = function () {
        return (url + 'saveContratoRecepcion');
    }

    // Modificar Contrato Recepcion
    this.getUrlModificarContratoRecepcion = function () {
        return (url + 'updateContratoRecepcion');
    }

    // Buscar todos los Contrato Recepcion activos
    this.getUrlAllContratoRecepcionActivos = function () {
        return (url + 'getAllContratoRecepcionActivos');
    }

    // Buscar todos los Contrato Recepcion
    this.getUrlAllContratoRecepcion = function () {
        return (url + 'getAllContratoRecepcion');
    }
    ///////////////////////////////////////////////////////////

    //Ingreso Embarcacion
    this.getUrlIngresoEmbarcacion = function () {
        return (url + 'saveEmbarcacion');
    }

    // Modificar Embarcacion
    this.getUrlModificarEmbarcacion = function () {
        return (url + 'updateEmbarcacion');
    }

    // Modificar Embarcacion Estado
    this.getUrlModificarEmbarcacionEstado = function () {
        return (url + 'updateEmbarcacionEstado');
    }

    // Buscar Embarcacion
    this.getUrlBuscarEmbarcacion = function () {
        return (url + 'getByIdEmbarcacion');
    }

    // Buscar todos los Embarcacion Disponibles
    this.getUrlAllEmbarcacionDisponibles = function () {
        return (url + 'getAllEmbarcacionDisponibles');
    }

    // Buscar todos los Embarcacion Disponibles y Viaje
    this.getUrlAllEmbarcacionDisponiblesViaje = function () {
        return (url + 'getAllEmbarcacionDisponiblesViaje');
    }

    // Buscar todos los Embarcacion
    this.getUrlAllEmbarcacion = function () {
        return (url + 'getAllEmbarcacion');
    }
    ///////////////////////////////////////////////////////////

    //Ingreso Mantenimiento
    this.getUrlIngresoMantenimiento = function () {
        return (url + 'saveMantenimiento');
    }

    // Modificar Mantenimiento
    this.getUrlModificarMantenimiento = function () {
        return (url + 'updateMantenimiento');
    }

    // Buscar todos los Mantenimiento
    this.getUrlAllMantenimiento = function () {
        return (url + 'getAllMantenimiento');
    }
    ///////////////////////////////////////////////////////////

    // Ingreso cliente
    this.getUrlIngresoCliente = function () {
        return (url + 'saveClientes');
    }

    // Modificar cliente
    this.getUrlModificarCliente = function () {
        return (url + 'updateClientes');
    }

    // Buscar Cliente
    this.getUrlIdClientes = function () {
        return (url + 'getByIdClientes');
    }
    // Buscar todos Cliente activos
    this.getUrlAllClientesActivos = function () {
        return (url + 'getAllClientesActivos');
    }
    // Buscar todos los Clientes
    this.getUrlAllClientes = function () {
        return (url + 'getAllClientes');
    }

    ///////////////////////////////////////////////////////

    // Ingreso PapelesEmbarcacion
    this.getUrlIngresoPapelesEmbarcacion = function () {

        return (url + 'savePapelesEmbarcacion');
    }

    // Modificar PapelesEmbarcacion
    this.getUrlModificarPapelesEmbarcacion = function () {
        return (url + 'updatePapelesEmbarcacion');
    }

    // Buscar po ID PapelesEmbarcacion
    this.getUrlIdPapelesEmbarcacion = function () {
        return (url + 'getByIdPapelesEmbarcacion');
    }

    // Buscar todos los PapelesEmbarcacion
    this.getUrlAllPapelesEmbarcacionActivos = function () {
        return (url + 'getAllPapelesEmbarcacionActivos');
    }

    // Buscar todos los PapelesEmbarcacion
    this.getUrlAllPapelesEmbarcacion = function () {
        return (url + 'getAllPapelesEmbarcacion');
    }

    //////////////////////////////////////////////////////

    // Ingreso Puerto
    this.getUrlIngresoPuerto = function () {

        return (url + 'savePuerto');
    }

    // Modificar Puerto
    this.getUrlModificarPuerto = function () {
        return (url + 'updatePuerto');
    }

    // Buscar po ID Puertos
    this.getUrlIdPuerto = function () {
        return (url + 'getByIdPuerto');
    }

    // Buscar todos los Puertos
    this.getUrlAllPuertoActivos = function () {
        return (url + 'getAllPuertoActivos');
    }

    // Buscar todos los Puertos
        this.getUrlAllPuerto = function () {
            return (url + 'getAllPuerto');
        }

    //////////////////////////////////////////////////////

    // Ingreso Tripulante
    this.getUrlIngresoTripulante = function () {
        return (url + 'saveTripulante');
    }

    // Modificar Tripulante
    this.getUrlModificarTripulante = function () {
        return (url + 'updateTripulante');
    }

    // Busacar por ID Tripulante
    this.getUrlBuscarTripulante = function () {
        return (url + 'getByIdTripulante');
    }

    // Busacar Tripulantes Activos
    this.getUrlAllTripulanteActivos = function () {
        return (url + 'getAllTripulanteActivos');
    }

    // Busacar Tripulantes de tipo capitan y timonel
    this.getUrlAllTripulanteCapitan = function () {
        return (url + 'getAllTripulanteCapitanes');
    }

    // Buscar todos los Tripulante
    this.getUrlAllTripulante = function () {
        return (url + 'getAllTripulante');
    }

    //////////////////////////////////////////////////////

    // Ingreso tipo Tripulante
    this.getUrlIngresoTipoTripulante = function () {
        return (url + 'saveTipoTripulante');
    }

    // Modificar tipo Tripulante
    this.getUrlModificarTipoTripulante = function () {
        return (url + 'updateTipoTripulante');
    }

    // Busacar por ID tipo Tripulante
    this.getUrlBuscarTipoTripulante = function () {
        return (url + 'getByIdTipoTripulante');
    }

    // Buscar todos los tipo Tripulante capitan y timonel
    this.getUrlAllTipoTripulanteCapitanTimonel = function () {
        return (url + 'getAllTipoTripulanteCapitanTimonel');
    }

    // Buscar todos los tipo Tripulante
    this.getUrlAllTipoTripulante = function () {
        return (url + 'getAllTipoTripulante');
    }

    //////////////////////////////////////////////////////

    // Ingreso tipo Usuario
    this.getUrlIngresoTipoUsuario = function () {
        return (url + 'saveTipoUsuario');
    }

    // Modificar tipo Usuario
    this.getUrlModificarTipoUsuario = function () {
        return (url + 'updateTipoUsuario');
    }

    // Buscar por ID tipo Usuario
    this.getUrlBuscarTipoUsuario = function () {
        return (url + 'getByIdTipoUsuario');
    }

    // Busacar todos los tipo Usuario Activos
    this.getUrlAllTipoUsuarioActivos = function () {
        return (url + 'getAllTipoUsuarioActivos');
    }

    // Busacar todos los tipo Usuario
    this.getUrlAllTipoUsuario = function () {
        return (url + 'getAllTipoUsuario');
    }
    /////////////////////////////////////////////////////////

    // Ingreso Tipo Combustible
    this.getUrlIngresoTipoCombustible = function () {
        return (url + 'saveTipoCombustible');
    }

    // Modificar Tipo Combustible
    this.getUrlModificarTipoCombustible = function () {
        return (url + 'updateTipoCombustible');
    }

    // Buscar Tipo Combustible
    this.getUrlBuscarTipoCombustible = function () {
        return (url + 'getByIdTipoCombustible');
    }

    // Buscar todos los Tipo Combustible Activos
    this.getUrlAllTipoCombustibleActivos = function () {
        return (url + 'getAllTipoCombustibleActivos');
    }

    // Buscar todos los Tipo Combustible transporte
    this.getUrlAllTipoCombustibleTransporte = function () {
        return (url + 'getAllTipoCombustibleTransporte');
    }

    // Buscar todos los Tipo Combustible
    this.getUrlAllTipoCombustible = function () {
        return (url + 'getAllTipoCombustible');
    }
    /////////////////////////////////////////////////////////////

    // Ingreso Tipo Embarcacion
    this.getUrlIngresoTipoEmbarcacion = function () {
        return (url + 'saveTipoEmbarcacion');
    }

    // Modificar Tipo Embarcacion
    this.getUrlModificarTipoEmbarcacion = function () {
        return (url + 'updateTipoEmbarcacion');
    }

    // Buscar todos los Tipo Embarcacion Activos
    this.getUrlAllTipoEmbarcacionActivos = function () {
        return (url + 'getAllTipoEmbarcacionActivos');
    }

    // Buscar todos los Tipo Embarcacion
    this.getUrlAllTipoEmbarcacion = function () {
        return (url + 'getAllTipoEmbarcacion');
    }
    /////////////////////////////////////////////////////////////

    // Ingreso Tipo Mantenimiento
    this.getUrlIngresoTipoMantenimiento = function () {
        return (url + 'saveTipoMantenimiento');
    }

    // Modificar Tipo Mantenimiento
    this.getUrlModificarTipoMantenimiento = function () {
        return (url + 'updateTipoMantenimiento');
    }

    // Buscar Tipo Mantenimiento
    this.getBuscarTipoMantenimiento = function () {
        return (url + 'getByIdTipoMantenimiento');
    }

    // Buscar Todos los Tipo Mantenimiento Activos
    this.getAllTipoMantenimientoActivos = function () {
        return (url + 'getAllTipoMantenimientoActivos');
    }

    // Buscar Todos los Tipo Mantenimiento
    this.getAllTipoMantenimiento = function () {
        return (url + 'getAllTipoMantenimiento');
    }
    ///////////////////////////////////////////////////////////////

    // Ingreso Materiales
    this.getUrlIngresoMateriales = function () {
        return (url + 'saveMateriales');
    }

    // Modificar Materiales
    this.getUrlModificarMateriales = function () {
        return (url + 'updateMateriales');
    }

    // Buscar Materiales
    this.getUrlBuscarMateriales = function () {
        return (url + 'getByIdMateriales');
    }

    // Buscar todos Materiales
    this.getUrlAllMaterialesActivos = function () {
        return (url + 'getAllMaterialesnActivos');
    }

    // Buscar todos Materiales
    this.getUrlAllMateriales = function () {
        return (url + 'getAllMateriales');
    }
    /////////////////////////////////////////////////////////

    // Ingreso Propietario
    this.getUrlIngresoPropietario = function () {
        return (url + 'savePropietario');
    }

    // Modificar Propietario
    this.getUrlModificarPropietario = function () {
        return (url + 'updatePropietario');
    }

    // Buscar por ID Propietario
    this.getUrlBuscarIdPropietario = function () {
        return (url + 'getByIdPropietario');
    }

    // Buscar todos los Propietario Activos
    this.getUrlAllPropietarioActivos = function () {
        return (url + 'getAllPropietarioActivos');
    }

    // Buscar todos los Propietario
    this.getUrlAllPropietario = function () {
        return (url + 'getAllPropietario');
    }
    //////////////////////////////////////////////////////////

    // Ingreso Tipo Alimentos
    this.getUrlIngresoTipoAlimentos = function () {
        return (url + 'saveTipoAlimentos');
    }

    // Modificar Tipo Alimentos
    this.getUrlModificarTipoAlimentos = function () {
        return (url + 'updateTipoAlimentos');
    }
    
    // Buscar Tipo Alimentos
    this.getUrlBuscarTipoAlimentos = function () {
        return (url + 'getByIdTipoAlimentos');
    }

    // Buscar todos los Tipo Alimentos Activos
    this.getUrlALLTipoAlimentosActivos = function () {
        return (url + 'getAllTipoAlimentosActivos');
    }

    // Buscar todos los Tipo Alimentos
    this.getUrlALLTipoAlimentos = function () {
        return (url + 'getAllTipoAlimentos');
    }

    //////////////////////////////////////////////////////////

    // Ingreso Tipo Cliente
    this.getUrlIngresoTipoCliente = function () {
        return (url + 'saveTipoCliente');
    }

    // Modificar Tipo Cliente
    this.getUrlModificarTipoCliente = function () {
        return (url + 'updateTipoCliente');
    }

    // Buscar Tipo Cliente
    this.getUrlBuscarTipoCliente = function () {
        return (url + 'getByIdTipoCliente');
    }

    // Buscar todos los Tipo Cliente Activos
    this.getUrlALLTipoClienteActivos = function () {
        return (url + 'getAllTipoClienteActivos');
    }

    // Buscar todos los Tipo Cliente
    this.getUrlALLTipoCliente = function () {
        return (url + 'getAllTipoCliente');
    }
    /////////////////////////////////////////////////////////

    // Ingreso Alimentos
    this.getUrlIngresoAlimentos = function () {
        return (url + 'saveAlimentos');
    }

    // Modificar Alimentos
    this.getUrlModificarAlimentos = function () {
        return (url + 'updateAlimentos');
    }

    // Buscar Alimentos
    this.getUrlBuscarAlimentos = function () {
        return (url + 'getByIdAlimentos');
    }

    // Buscar todos los Alimentos
    this.getUrlALLAlimentos = function () {
        return (url + 'getAllAlimentos');
    }
    /////////////////////////////////////////////////////////

    // Ingreso Material Petreo
    this.getUrlIngresoMaterialPetreo = function () {
        return (url + 'saveMaterialPetreo');
    }

    // Modificar Material Petreo
    this.getUrlModificarMaterialPetreo = function () {
        return (url + 'updateMaterialPetreo');
    }

    // Buscar Material Petreo
    this.getUrlIdMaterialPetreo = function () {
        return (url + 'getByIdMaterialPetreo');
    }

    // Buscar todos Material Petreo
    this.getUrlAllMaterialPetreo = function () {
        return (url + 'getAllMaterialPetreo');
    }
    /////////////////////////////////////////////////////////////

    // Ingreso Vehiculo
    this.getUrlIngresoVehiculo = function () {
        return (url + 'saveVehiculos');
    }

    // Modificar Vehiculo
    this.getUrlModificarVehiculo = function () {
        return (url + 'updateVehiculos');
    }

    // Buscar  Vehiculo
    this.getUrlIdVehiculo = function () {
        return (url + 'getByIdVehiculos');
    }

    // Buscar todos Vehiculo
    this.getUrlAllVehiculo = function () {
        return (url + 'getAllVehiculos');
    }
    ///////////////////////////////////////////////////////////

    // Ingreso Usuario
    this.getUrlIngresoUsuario = function () {
        return (url + 'saveUsuario');
    }

    // Modificar Usuario
    this.getUrlModificarUsuario = function () {
        return (url + 'updateUsuario');
    }

    // Modificar Usuario
    this.getUrlModificarUsuarioPsswd = function () {
        return (url + 'updateUsuarioPassword');
    }

    // Buscar Usuario
    this.getUrlBuscarUsuario = function () {
        return (url + 'getByIdUsuario');
    }

    // Buscar Usuario por nombre
    this.getUrlBuscarUsuarioNombre = function () {
        return (url + 'getByNameUsuario');
    }

    // Buscar todos los Usuario
    this.getUrlAllUsuario = function () {
        return (url + 'getAllUsuario');
    }

    ////////////////////////////////////////////////////////////

    // Ingreso Combustible
    this.getUrlIngresoCombustible = function () {
        return (url + 'saveCombustible');
    }

    // Modificar Combustible
    this.getUrlModificarCombustible = function () {
        return (url + 'updateCombustible');
    }

    // Buscar Combustible
    this.getUrlBuscarCombustible = function () {
        return (url + 'getByIdCombustible');
    }

    // Buscar todos los Combustible
    this.getUrlAllCombustible = function () {
        return (url + 'getAllCombustible');
    }

    ///////////////////////////////////////////////////////////

    // Ingreso Materiales Seleccionados
    this.getUrlIngresoMaterialesSeleccionados = function () {
        return (url + 'saveMaterialesSeleccionados');
    }

    // Modificar Materiales Seleccionados
    this.getUrlModificarMaterialesSeleccionados = function () {
        return (url + 'updateMaterialesSeleccionados');
    }

    // Buscar Materiales Seleccionados
    this.getUrlBuscarMaterialesSeleccionados = function () {
        return (url + 'getByIdMaterialesSeleccionados');
    }

    // Buscar todos Materiales Seleccionados
    this.getUrlAllMaterialesSeleccionados = function () {
        return (url + 'getAllMaterialesSeleccionados');
    }

    ////////////////////////////////////////////////////////////////////////

    // Ingreso Detalle Mantenimiento
    this.getUrlIngresoDetalleMantenimiento = function () {
        return (url + 'saveDetalleMantenimiento');
    }

    // Modificar Detalle Mantenimiento
    this.getUrlModificarDetalleMantenimiento = function () {
        return (url + 'updateDetalleMantenimiento');
    }

    // buscar todos los Detalle Mantenimiento
    this.getUrlBuscarDetalleMantenimiento = function () {
        return (url + 'getByIdDetalleMantenimiento');
    }

    // buscar todos los Detalle Mantenimiento
    this.getUrlAllDetalleMantenimiento = function () {
        return (url + 'getAllDetalleMantenimiento');
    }

}

app.factory("myProvider", function () {

    return new ApiUrl();



});