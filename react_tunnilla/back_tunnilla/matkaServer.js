const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit: '5mb', extended: true}));
app.use(cors());

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('matkat.db');

app.listen(8080, function () {
    console.log('Node toimii localhost:8080');
});

app.get('/', function (req, res) {
    return res.send({ error: false, message: 'Toimii' })
});

app.get('/matka/all', function (req, res) {
	db.all("select * from matka", function (error, result) {
    if (error){
        throw error;
    }
    return res.status(200).send(result);

	});
})

app.get('/matka/:id', function (req, res) {
	let id = req.params.id;

    //db.get("select * from matka where id=?, a=?", [id, 2], function (error, result) ???

    db.get("select * from matka where id=?", [id], function (error, result) {

      if (error){
          throw error;
      }

      //annetulla id:llä ei ole riviä
      if (typeof(result) == "undefined"){
          return res.status(200).send({});
      }

      return res.status(200).send(result);

	});
})

app.post('/matka/add', function (req, res) {
	let matka = req.body;

    db.run("insert into matka (otsikko,paiva,paikka,saa,kuva,kuvaus) values (?,?,?,?,?,?)",
	[matka.otsikko, matka.paiva, matka.paikka, matka.saa, null, matka.kuvaus],
	function (error, result) {
        if(error){
            throw error;
        }

        return res.status(200).send();

	});
})

app.get('/matka/delete/:id', function (req, res) {
	let id = req.params.id;

    db.run("delete from matka where id=?", [id], function (error, result) {
      if(error){
          throw error;
      }

      return res.status(200).send({count: this.changes});

	});
})

app.get('*', function (req, res) {
    return res.status(404).send({ error: true, message: 'Ei pyydettyä palvelua' })
})
