app.controller('ControllerUsuario', ['$scope', '$http', 'myProvider', function ($scope, $http, myProvider) {

    $scope.url;
    $scope.urlBuscarUser;
    $scope.urlRegister;
    $scope.urlModificar;
    $scope.urlModificarPsswd;
    $scope.urlAllUsuario;
    $scope.urlAllTipoUsuario;
    $scope.urlBuscarTipoUsuario;


    $scope.nombreUsuario;
    $scope.nombresCompletos;
    $scope.cedulaUsuario;
    $scope.contrasenaUsuario;
    $scope.telefonoUsuario;
    $scope.correoUsuario;
    $scope.tipoUsuario;
    $scope.contrasenaAux = "";

    $scope.userAux = "";

    $scope.id;
    $scope.seleccionUsuario;
    $scope.seleccionTipoUsuario;


    $scope.busqueda;
    $scope.listaUsuario;
    $scope.listaTipoUsuario;

    var aux = localStorage.getItem("id_token");
    if (aux != null) {
        $scope.iniciar = function () {

            $scope.url = myProvider.getUrlIngresoUsuario();
            $scope.urlBuscarUser = myProvider.getUrlBuscarUsuarioNombre();
            $scope.urlRegister = myProvider.getUrlRegisterUser();
            $scope.urlModificarPsswd = myProvider.getUrlModificarUsuarioPsswd();
            $scope.urlModificar = myProvider.getUrlModificarUsuario();
            $scope.urlAllUsuario = myProvider.getUrlAllUsuario();
            $scope.urlAllTipoUsuario = myProvider.getUrlAllTipoUsuario();
            $scope.urlBuscarTipoUsuario = myProvider.getUrlBuscarTipoUsuario();

            if (localStorage.getItem("user") != undefined && localStorage.getItem("user") != "" && localStorage.getItem("user") != null) {
                $scope.usuario = JSON.parse(localStorage.getItem("user"));
                $scope.tipoUsuarioLogin = JSON.parse(localStorage.getItem("tipoUser"));
                if ($scope.tipoUsuarioLogin.descripcion_tipo_usuario != "administrador") {
                    $scope.id = $scope.usuario._id;
                    $scope.nombreUsuario = $scope.usuario.username;
                    $scope.correoUsuario = $scope.usuario.email;
                    $scope.nombresCompletos = $scope.usuario.name;
                    $scope.contrasenaUsuario = "";
                    $scope.telefonoUsuario = $scope.usuario.phone;
                    $scope.tipoUsuario = $scope.tipoUsuarioLogin._id;
                    $scope.cedulaUsuario = $scope.usuario.identification_card;
                    $scope.userAux = $scope.usuario;
                    $scope.contrasenaAux = $scope.usuario.password;

                    $http.get($scope.urlAllTipoUsuario)
                        .then(function (response) {

                            $scope.listaTipoUsuario = response.data;
                            $scope.tipoUsuario = $scope.tipoUsuarioLogin._id;

                        }, function errorCallback(response) {

                            console.log(response);
                        });

                } else {
                    $scope.id = "";
                    $scope.nombreUsuario = "";
                    $scope.correoUsuario = "";
                    $scope.nombresCompletos = "";
                    $scope.contrasenaUsuario = "";
                    $scope.telefonoUsuario = "";
                    $scope.tipoUsuario = "";
                    $scope.cedulaUsuario = "";
                    $scope.userAux = "";
                    $scope.contrasenaAux = "";
                    
                    $http.get($scope.urlAllTipoUsuario)
                        .then(function (response) {

                            $scope.listaTipoUsuario = response.data;
                            $scope.tipoUsuario = $scope.listaTipoUsuario[0]._id;

                        }, function errorCallback(response) {

                            console.log(response);
                        });

                }
            }

            $http.get($scope.urlAllUsuario)
                .then(function (response) {

                    $scope.listaUsuario = response.data;

                    var n = $scope.listaUsuario.length;
                    var k = 0;
                    for (var i = 0; i < n; i++) {
                        var tpUsu = {
                            id: $scope.listaUsuario[i].type_user
                        }

                        $http.post($scope.urlBuscarTipoUsuario, tpUsu)
                            .then(function (response) {

                                $scope.listaUsuario[k++].type_user = response.data;

                            }, function errorCallback(response) {

                                console.log(response);
                            });
                    }

                }, function errorCallback(response) {

                    console.log(response);
                });
        }
    } else {
        window.location = "../login.html"
    }

    $scope.ingresoUsuario = function () {

        var us = {
            username: $scope.nombreUsuario
        }

        $http.post($scope.urlBuscarUser, us)
            .then(function (response) {
                if (response.data == null || response.data == "") {
                    const user = {
                        name: $scope.nombresCompletos,
                        username: $scope.nombreUsuario,
                        identification_card: $scope.cedulaUsuario,
                        password: $scope.contrasenaUsuario,
                        phone: $scope.telefonoUsuario,
                        email: $scope.correoUsuario,
                        type_user: $scope.tipoUsuario
                    }

                    if (validarCamposVacios(user)) {
                        if (validateEmail(user.email)) {
                            $http.post($scope.urlRegister, user)
                                .then(function (response) {

                                    $scope.iniciar();
                                    $.notify("Ingreso Correcto", "success");

                                }, function errorCallback(response) {

                                    $.notify("Error!", "error");
                                });
                        } else {
                            $.notify("Correo Invalido!", "error");
                        }
                    } else {
                        $.notify("Revise los Campos", "info");
                    }
                } else
                    $.notify("Usuario ya Existe", "info");

            }, function errorCallback(response) {
                alert(response);
            });
    }

    $scope.modificarUsuario = function () {

        if ($scope.contrasenaUsuario == "") {
            var obj = {
                id: $scope.id,
                name: $scope.nombresCompletos,
                username: $scope.nombreUsuario,
                identification_card: $scope.cedulaUsuario,
                password: $scope.contrasenaAux,
                phone: $scope.telefonoUsuario,
                email: $scope.correoUsuario,
                type_user: $scope.tipoUsuario
            };
            if (validarCamposVacios(obj)) {
                if (validateEmail(obj.email)) {
                    $http.post($scope.urlModificar, obj)
                        .then(function (response) {

                            $scope.iniciar();
                            $.notify("Modificacion Exitosa", "success");
                            $.notify("Realice nuevamente su Login!", "error");
                            $scope.logout();
                            window.location = "../login.html";

                        }, function errorCallback(response) {
                            $.notify("Error!", "error");
                        });
                } else {
                    $.notify("Correo Invalido!", "error");
                }
            } else {
                $.notify("Revise los Campos", "info");
            }
        } else {
            var obj = {
                id: $scope.id,
                name: $scope.nombresCompletos,
                username: $scope.nombreUsuario,
                identification_card: $scope.cedulaUsuario,
                password: $scope.contrasenaUsuario,
                phone: $scope.telefonoUsuario,
                email: $scope.correoUsuario,
                type_user: $scope.tipoUsuario
            };
            if (validarCamposVacios(obj)) {
                if (validateEmail(obj.email)) {
                    $http.post($scope.urlModificarPsswd, obj)
                        .then(function (response) {

                            $scope.iniciar();
                            $.notify("Modificacion Exitosa", "success");
                            $.notify("Realice nuevamente su Login!", "error");
                            $scope.logout();
                            window.location = "../login.html";

                        }, function errorCallback(response) {
                            $.notify("Error!", "error");
                        });
                } else {
                    $.notify("Correo Invalido!", "error");
                }
            } else {
                $.notify("Revise los Campos", "info");
            }
        }
    }

    $scope.buscarSeleccionListaUsuario = function () {

        if ($scope.seleccionUsuario != '' && $scope.seleccionUsuario != undefined) {

            $scope.selecUsu = $scope.seleccionUsuario;

            $scope.id = $scope.selecUsu._id;
            $scope.nombreUsuario = $scope.selecUsu.username;
            $scope.nombresCompletos = $scope.selecUsu.name;
            $scope.cedulaUsuario = $scope.selecUsu.identification_card;
            $scope.contrasenaUsuario = $scope.selecUsu.password;
            $scope.telefonoUsuario = $scope.selecUsu.phone;
            $scope.correoUsuario = $scope.selecUsu.email;
            $scope.tipoUsuario = $scope.selecUsu.type_user._id;

            $scope.contrasenaAux = $scope.selecUsu.password;
            $scope.userAux = $scope.selecUsu;
        }
    }

    $scope.logout = function () {

        localStorage.clear();
        window.location = "../login.html";

    }

    $scope.setClickedRow = function (index, item) {

        $scope.seleccionUsuario = item;
        $scope.selectedRow = index;

        $scope.buscarSeleccionListaUsuario();

    }

}]);


function validarCamposVacios(user) {

    if (user.username == "" || user.name == "" || user.email == "" || user.phone == "" ||
        user.password == "" || user.identification_card == "" || user.type_user == "") {

        return false;

    } else {
        return true;
    }

}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}