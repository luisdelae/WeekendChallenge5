var express = require('express');
var router = express.Router();
var pg = require('pg');
var connect = require('../modules/connection');


router.get('/', function(req, res) {
    var results = [];

    pg.connect(connect, function(err, client, done) {
        var query = client.query('SELECT * FROM savedanimals');

        // Stream results back one row at a time
        query.on('row', function(row) {
            results.push(row);
        });

        // close connection
        query.on('end', function() {
            done();
            return res.json(results);
        });

        if(err) {
            console.log(err);
        }
    });
});

router.post('/', function(req, res) {
    console.log(req.body);
    var addAnimal = {
        animal_pet_id: req.body.id.$t,
        animal_type: req.body.animal.$t,
        animal_name: req.body.name.$t,
        animal_breed: req.body.breeds.breed.$t,
        animal_description: req.body.description.$t,
        animal_age: req.body.age.$t,
        animal_sex: req.body.sex.$t,
        animal_picture_url: req.body.media.photos.photo[2].$t,
        animal_shelter_id: req.body.shelterId.$t,
        // animal_shelter: req.body.,
    };

    pg.connect(connect, function(err, client, done) {
      console.log('addAnimal info at server:: ', addAnimal);
      client.query('INSERT INTO savedanimals (animal_pet_id, animal_type, ' +
       'animal_name, animal_breed, animal_description, animal_age, ' +
       'animal_sex, animal_picture_url, animal_shelter_id) ' +
          'VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9);',
          [addAnimal.animal_pet_id, addAnimal.animal_type, addAnimal.animal_name,
            addAnimal.animal_breed, addAnimal.animal_description, addAnimal.animal_age,
            addAnimal.animal_sex, addAnimal.animal_picture_url, addAnimal.animal_shelter_id],
          function(err, result) {
              done();
              if(err) {
                  console.log('Error inserting data: ', err);
                  res.send(false);
              } else {
                  res.send(result);
              }
          });
    });
});


module.exports = router;
