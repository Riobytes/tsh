var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://localhost:27017/tsh';
var objectId = require('mongodb').ObjectID;
const passport = require('passport');
const jwt = require('jsonwebtoken');

router.post('/saveTipoEmbarcacion', function (req, res) {

    MongoClient.connect(url, function (err, db) {
        assert.equal(null, err);

        console.log(req.body);
        var collection = db.collection('tipo_embarcacion');
        collection.insert(req.body, function (err, result) {
            if (err) {
                res.send("false");
            } else
                res.send("true");
        });

        db.close();

    });
});


router.post('/updateTipoEmbarcacion', function (req, res) {


    MongoClient.connect(url, function (err, db) {
        assert.equal(null, err);
        console.log(req.body);
        var item = {
            descripcion_tipo_embarcacion: req.body.descripcion_tipo_embarcacion,
            estado: req.body.estado
        };



        var id = req.body.id;
        db.collection('tipo_embarcacion').updateOne({ "_id": objectId(id) }, { $set: item }, function (err, result) {
            if (err) {
                res.send("false");
            } else
                res.send("true");
        });

        db.close();
    });
});

router.post('/getByIdTipoEmbarcacion', function (req, res) {

    MongoClient.connect(url, function (err, db) {
        assert.equal(null, err);
        console.log(req.body);

        var id = req.body.id;
        db.collection('tipo_embarcacion').findOne({ "_id": objectId(id) }, function (err, result) {
            assert.equal(null, err);
            console.log(result);
            console.log('Item loaded');
            res.send(result);
        });

        db.close();
    });
});

router.get('/getAllTipoEmbarcacionActivos', function (req, res) {
    var resultArray = [];

    MongoClient.connect(url, function (err, db) {
        assert.equal(null, err);

        var cursor = db.collection('tipo_embarcacion').find({ "estado": "1" });
        cursor.forEach(function (doc, err) {
            assert.equal(null, err);
            resultArray.push(doc);
        }, function () {
            db.close();
            res.send(resultArray);

        });
    });

});

router.get('/getAllTipoEmbarcacion', function (req, res) {

    var resultArray = [];
    MongoClient.connect(url, function (err, db) {

        assert.equal(null, err);
        var cursor = db.collection('tipo_embarcacion').find();
        cursor.forEach(function (doc, err) {
            assert.equal(null, err);
            resultArray.push(doc);
        }, function () {
            db.close();
            res.send(resultArray);

        });
    });

});

router.get('/IngresoTipoEmbarcacion.html', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    res.json({ user: req.user });
});


module.exports = router;