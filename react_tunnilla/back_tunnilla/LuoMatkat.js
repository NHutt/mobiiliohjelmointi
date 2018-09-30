var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('matkat.db');

db.serialize(function() {

    let sql = "CREATE TABLE matka (" +
              "id integer PRIMARY KEY NOT NULL, " +
              "otsikko text NOT NULL, " +
              "paiva date NOT NULL, " +
              "paikka text NOT NULL, " +
              "saa text NOT NULL, " +
              "kuva blob, " +
              "kuvaus text )";

    db.run(sql, function(err) {
        if (err) {
          return console.log(err.message);
        }
        console.log("Taulu tehtiin");
    });

    sql = "INSERT INTO `matka` (`id`, `otsikko`, `paiva`, `paikka`, `saa`, `kuva`, `kuvaus`) "+
    " VALUES (1, 'Lomalla', '2018-08-15', 'Lohja', 'Sateinen, +19', null, 'Lomalla Lohjalla')";
    db.run(sql, function(err) {
        if (err) {
          return console.log(err.message);
        }
        console.log("Rivi lisättiin");
    });

    sql = "INSERT INTO `matka` (`id`, `otsikko`, `paiva`, `paikka`, `saa`, `kuva`, `kuvaus`) "+
    " VALUES (2, 'Töissä', '2019-01-08', 'Helsinki', 'Pieni lumisade, -1', null, 'Töissä Helsingissä')";
    db.run(sql, function(err) {
        if (err) {
            return console.log(err.message);
        }
        console.log("Rivi lisättiin");
    });

    sql = "INSERT INTO `matka` (`id`, `otsikko`, `paiva`, `paikka`, `saa`, `kuva`, `kuvaus`) "+
    " VALUES (3, 'Lounaalla', '2019-01-20', 'Lohja', 'Pilvinen, -7', null, 'Sukuloimassa')";
    db.run(sql, function(err) {
        if (err) {
            return console.log(err.message);
        }
        console.log("Rivi lisättiin");
    });

    db.each("SELECT id, otsikko FROM matka", function(err, row) {
        if (err) {
          return console.log(err.message);
        }
        console.log(row.id + ", " + row.otsikko);
    });

    db.close();
});
