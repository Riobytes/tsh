var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://localhost:27017/tsh';
var objectId = require('mongodb').ObjectID;
const passport = require('passport');
const jwt = require('jsonwebtoken');

router.post('/savePapelesEmbarcacion', function (req, res) {

    MongoClient.connect(url, function (err, db) {
        assert.equal(null, err);

        console.log(req.body);
        var collection = db.collection('papeles_embarcacion');
        collection.insert(req.body, function (err, result) {
            if (err) {
                res.send("false");
            } else
                res.send("true");
        });

        db.close();
    });
});


router.post('/updatePapelesEmbarcacion', function (req, res) {


    MongoClient.connect(url, function (err, db) {
        assert.equal(null, err);
        console.log(req.body);
        var item = {
            embarcacion: req.body.embarcacion,
            descripcion_papeles_embarcacion: req.body.descripcion_papeles_embarcacion,
            fecha_emision: req.body.fecha_emision,
            fecha_caducidad: req.body.fecha_caducidad,
            estado: req.body.estado
        };



        var id = req.body.id;
        db.collection('papeles_embarcacion').updateOne({ "_id": objectId(id) }, { $set: item }, function (err, result) {
            if (err) {
                res.send("false");
            } else
                res.send("true");
        });

        db.close();
    });
});

router.post('/getByIdPapelesEmbarcacion', function (req, res) {

    MongoClient.connect(url, function (err, db) {
        assert.equal(null, err);
        console.log(req.body);

        var id = req.body.id;
        db.collection('papeles_embarcacion').findOne({ "_id": objectId(id) }, function (err, result) {
            assert.equal(null, err);
            console.log(result);
            console.log('Item loaded');
            res.send(result);
        });

        db.close();
    });
});

router.post('/getAllPapelesEmbarcacionActivos', function (req, res) {
    var resultArray = [];

    MongoClient.connect(url, function (err, db) {
        assert.equal(null, err);

        var embarcacion = req.body.embarcacion;
        var cursor = db.collection('papeles_embarcacion').find({ "embarcacion": embarcacion, "estado": "1" });
        cursor.forEach(function (doc, err) {
            assert.equal(null, err);
            resultArray.push(doc);
        }, function () {
            db.close();
            res.send(resultArray);

        });
    });

});

router.get('/getAllPapelesEmbarcacion', function (req, res) {

    var resultArray = [];
    MongoClient.connect(url, function (err, db) {

        assert.equal(null, err);
        var cursor = db.collection('papeles_embarcacion').find();
        cursor.forEach(function (doc, err) {
            assert.equal(null, err);
            resultArray.push(doc);
        }, function () {
            db.close();
            res.send(resultArray);

        });
    });

});

router.get('/IngresoPapelesEmbarcacion.html', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    res.json({ user: req.user });
});

module.exports = router;