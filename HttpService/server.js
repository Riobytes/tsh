var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
//var MongoClient = require('mongodb').MongoClient;
const path = require('path');
const config = require('./config/database');
const passport = require('passport');

// </editor-fold>

mongoose.connect(config.database);

mongoose.connection.on('conected', () => {
    console.log("conectado base " + config.dataBase);
})
mongoose.connection.on('error', () => {
    console.log("database error " + err);
})


var app = express();
const users = require('./Routers/users');
const port = 3001;
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//passport middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/api', require('./Routers/apiUsuario'));
app.use('/api', require('./Routers/apiTipoUsuario'));
app.use('/api', require('./Routers/apiTipoTripulante'));
app.use('/api', require('./Routers/apiTripulante'));
app.use('/api', require('./Routers/apiTipoCombustible'));
app.use('/api', require('./Routers/apiTipoEmbarcacion'));
app.use('/api', require('./Routers/apiTipoMantenimiento'));
app.use('/api', require('./Routers/apiPropietario'));
app.use('/api', require('./Routers/apiPuerto'));
app.use('/api', require('./Routers/apiEstadoOrdenServicio'));
app.use('/api', require('./Routers/apiEstadoEmbarcacion'));
app.use('/api', require('./Routers/apiTipoMaterialPetreo'));
app.use('/api', require('./Routers/apiClientes'));
app.use('/api', require('./Routers/apiCombustible'));
app.use('/api', require('./Routers/apiMaterialPetreo'));
app.use('/api', require('./Routers/apiVehiculos'));
app.use('/api', require('./Routers/apiMateriales'));
app.use('/api', require('./Routers/apiPapelesEmbarcacion'));
app.use('/api', require('./Routers/apiMaterialesSeleccionados'));
app.use('/api', require('./Routers/apiAlimentos'));
app.use('/api', require('./Routers/apiTipoCliente'));
app.use('/api', require('./Routers/apiTipoAlimentos'));
app.use('/api', require('./Routers/apiDetalleMantenimiento'));
app.use('/api', require('./Routers/apiEmbarcacion'));
app.use('/api', require('./Routers/apiMantenimiento'));
app.use('/api', require('./Routers/apiOrdenServicio'));
app.use('/api', require('./Routers/apiPedido'));
app.use('/api', require('./Routers/apiContratoRecepcion'));

app.use('/users', users);

app.get('/', (req, res) => {
    res.send("Login Invalido")
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
})

app.listen(port, function () {
    console.log('Ejecucion en puerto: ' + port)
});