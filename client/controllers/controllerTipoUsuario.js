app.controller('ControllerTipoUsuario', ['$scope', '$http', 'myProvider', function ($scope, $http, myProvider) {

    $scope.url;
    $scope.urlModificar;
    $scope.urlAllTipoUsuario;

    $scope.descripcionTipoUsuario;

    $scope.id;
    $scope.seleccion;
    $scope.seleccionTipoUsuario;

    $scope.busqueda;
    $scope.listaTipoUsuario;

    var aux = localStorage.getItem("id_token");
    if (aux != null) {
        $scope.iniciar = function () {
            $scope.url = myProvider.getUrlIngresoTipoUsuario();
            $scope.urlModificar = myProvider.getUrlModificarTipoUsuario();
            $scope.urlAllTipoUsuario = myProvider.getUrlAllTipoUsuario();

            if (localStorage.getItem("user") != undefined && localStorage.getItem("user") != "" && localStorage.getItem("user") != null) {
                $scope.usuario = JSON.parse(localStorage.getItem("user"));
                $scope.tipoUsuario = JSON.parse(localStorage.getItem("tipoUser"));
            }

            $scope.descripcionTipoUsuario = "";

            $scope.id = "";
            $scope.seleccion = "";
            $scope.seleccionTipoUsuario = "";

            $scope.busqueda = "";
            $scope.listaTipoUsuario;

            $scope.listaEstado = [{ id: '1', estado: 'Activo' }, { id: '2', estado: "Inactivo" }];
            $scope.estado = "1";

            $http.get($scope.urlAllTipoUsuario)
                .then(function (response) {

                    $scope.listaTipoUsuario = response.data;

                    var n = $scope.listaTipoUsuario.length;
                    for (var i = 0; i < n; i++) {
                        if ($scope.listaTipoUsuario[i].estado == $scope.listaEstado[0].id)
                            $scope.listaTipoUsuario[i].estado = $scope.listaEstado[0];
                        else
                            $scope.listaTipoUsuario[i].estado = $scope.listaEstado[1];
                    }

                }, function errorCallback(response) {

                    console.log(response);
                });
        }
    } else {
        window.location = "../login.html"
    }
    $scope.ingresoTipoUsuario = function () {

        var obj = {
            descripcion_tipo_usuario: $scope.descripcionTipoUsuario,
            estado: $scope.estado
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

    $scope.modificarTipoUsuario = function () {

        var obj = {
            id: $scope.id,
            descripcion_tipo_usuario: $scope.descripcionTipoUsuario,
            estado: $scope.estado
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

    $scope.buscarSeleccionTipoUsuario = function () {

        if ($scope.seleccionTipoUsuario != '' && $scope.seleccionTipoUsuario != undefined) {

            $scope.selecTipUsu = $scope.seleccionTipoUsuario;

            $scope.id = $scope.selecTipUsu._id;
            $scope.descripcionTipoUsuario = $scope.selecTipUsu.descripcion_tipo_usuario;
            $scope.estado = $scope.selecTipUsu.estado.id;

        }
    }

    $scope.logout = function () {

        localStorage.clear();
        window.location = "../login.html"

    }

    $scope.setClickedRow = function (index, item) {

        $scope.seleccionTipoUsuario = item;
        $scope.selectedRow = index;

        $scope.buscarSeleccionTipoUsuario();

    }

}]);


function validarCamposVacios(obj) {
    if (obj.descripcion_tipo_usuario == "") {

        return false;

    } else {
        return true;
    }
}