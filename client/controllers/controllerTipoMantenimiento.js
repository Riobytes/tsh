app.controller('ControllerTipoMantenimiento', ['$scope', '$http', 'myProvider', function ($scope, $http, myProvider) {

    $scope.url;
    $scope.urlModificar;
    $scope.urlAllTipoMantenimiento;

    $scope.descripcionTipoMantenimiento;

    $scope.id;
    $scope.seleccion;
    $scope.seleccionTipoMantenimiento;

    $scope.busqueda;
    $scope.listaTipoMantenimiento;

    var aux = localStorage.getItem("id_token");
    if (aux != null) {
        $scope.iniciar = function () {
            $scope.url = myProvider.getUrlIngresoTipoMantenimiento();
            $scope.urlModificar = myProvider.getUrlModificarTipoMantenimiento();
            $scope.urlAllTipoMantenimiento = myProvider.getAllTipoMantenimiento();

            $scope.descripcionTipoMantenimiento = "";

            $scope.id = "";
            $scope.seleccion = "";
            $scope.seleccionTipoMantenimiento = "";

            $scope.busqueda = "";
            $scope.listaTipoMantenimiento;

            $http.get($scope.urlAllTipoMantenimiento)
                .then(function (response) {

                    $scope.listaTipoMantenimiento = response.data;

                }, function errorCallback(response) {

                    console.log(response);
                });
        }
    } else {
        window.location = "../login.html"
    }

    $scope.ingresoTipoMantenimiento = function () {

        var obj = {
            descripcion_tipo_mantenimiento: $scope.descripcionTipoMantenimiento
        };

        if (validarCamposVacios(obj)) {
            $http.post($scope.url, obj)
                .then(function (response) {

                    $scope.iniciar();
                    $.notify("Ingreso Correcto", "success");

                }, function errorCallback(response) {

                    $.notify("Error!", "error");
                });
        } else {
            $.notify("Revise los Campos", "info");
        }
    }

    $scope.modificarTipoMantenimiento = function () {

        var obj = {
            id: $scope.id, descripcion_tipo_mantenimiento: $scope.descripcionTipoMantenimiento
        };

        if (validarCamposVacios(obj)) {
            $http.post($scope.urlModificar, obj)
                .then(function (response) {

                    $scope.iniciar();
                    $.notify("Modificacion Exitosa", "success");

                }, function errorCallback(response) {

                    $.notify("Error!", "error");
                });
        } else {
            $.notify("Revise los Campos", "info");
        }
    }

    $scope.buscarSeleccionTipoMantenimiento = function () {

        if ($scope.seleccionTipoMantenimiento != '' && $scope.seleccionTipoMantenimiento != undefined) {

            $scope.selecTipMant = JSON.parse($scope.seleccionTipoMantenimiento);

            $scope.id = $scope.selecTipMant._id;
            $scope.descripcionTipoMantenimiento = $scope.selecTipMant.descripcion_tipo_mantenimiento;

        }
    }

    $scope.logout = function () {

        localStorage.clear();
        window.location = "../login.html"

    }

}]);

function validarCamposVacios(obj) {
    if (obj.descripcion_tipo_mantenimiento == "") {

        return false;

    } else {
        return true;
    }
}