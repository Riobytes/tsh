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

    $scope.iniciar = function () {
        $scope.url = myProvider.getUrlIngresoTipoUsuario();
        $scope.urlModificar = myProvider.getUrlModificarTipoUsuario();
        $scope.urlAllTipoUsuario = myProvider.getUrlAllTipoUsuario();
        $http.get($scope.urlAllTipoUsuario)
            .then(function (response) {

                $scope.listaTipoUsuario = response.data;

            }, function errorCallback(response) {

                console.log(response);
            });
    }

    $scope.ingresoTipoUsuario = function () {
        console.log($scope.descripcionTipoUsuario);
        var obj = { descripcion_tipo_usuario: $scope.descripcionTipoUsuario };
        $http.post($scope.url, obj)
            .then(function (response) {

                $scope.iniciar();
                console.log(response);

            }, function errorCallback(response) {

                console.log(response);
            });

    }

    $scope.modificarTipoUsuario = function () {

        var obj = { id: $scope.id, descripcion_tipo_usuario: $scope.descripcionTipoUsuario };
        $http.post($scope.urlModificar, obj)
            .then(function (response) {

                $scope.iniciar();
                console.log(response);

            }, function errorCallback(response) {

                console.log(response);
            });

    }

    $scope.buscarSeleccionTipoUsuario = function () {

        if ($scope.seleccionTipoUsuario != '' && $scope.seleccionTipoUsuario != undefined) {

            $scope.selecTipUsu = JSON.parse($scope.seleccionTipoUsuario);

            $scope.id = $scope.selecTipUsu._id;
            $scope.descripcionTipoUsuario = $scope.selecTipUsu.descripcion_tipo_usuario;

        }
    }

}]);