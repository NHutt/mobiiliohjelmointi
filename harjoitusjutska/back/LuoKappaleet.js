var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('kappaleet.db');

db.serialize(function() {

    let sql = "CREATE TABLE Kappale (" +
              "id integer PRIMARY KEY NOT NULL, " +
              "artisti text NOT NULL, " +
              "kappale text NOT NULL, " +
              "musiikkiArvosana integer NOT NULL, " +
              "mvArvosana integer NOT NULL, " +
              "koreografiaArvosana integer NOT NULL, " +
              "lyriikatArvosana integer NOT NULL, " +
              "kuva blob )";


    db.run(sql, function(err) {
        if (err) {
          return console.log(err.message);
        }
        console.log("Taulu tehtiin");
    });

    sql = "INSERT INTO `Kappale` (`id`, `artisti`, `kappale`, `musiikkiArvosana`, `mvArvosana`, `koreografiaArvosana`, `lyriikatArvosana`, `kuva`) "+
    " VALUES (1, 'ONF', 'Complete', 10, 8, 8, 9, null)";
    db.run(sql, function(err) {
        if (err) {
          return console.log(err.message);
        }
        console.log("Rivi lisättiin");
    });

    sql = "INSERT INTO `Kappale` (`id`, `artisti`, `kappale`, `musiikkiArvosana`, `mvArvosana`, `koreografiaArvosana`, `lyriikatArvosana`, `kuva`) "+
    " VALUES (2, 'NeonPunch', 'Moonlight', 9, 7, 7, 8, null)";
    db.run(sql, function(err) {
        if (err) {
            return console.log(err.message);
        }
        console.log("Rivi lisättiin");
    });

    sql = "INSERT INTO `Kappale` (`id`, `artisti`, `kappale`, `musiikkiArvosana`, `mvArvosana`, `koreografiaArvosana`, `lyriikatArvosana`, `kuva`) "+
    " VALUES (3, 'Pentagon', 'Shine', 10, 10, 10, 10, null)";
    db.run(sql, function(err) {
        if (err) {
            return console.log(err.message);
        }
        console.log("Rivi lisättiin");
    });

    sql = "INSERT INTO `Kappale` (`id`, `artisti`, `kappale`, `musiikkiArvosana`, `mvArvosana`, `koreografiaArvosana`, `lyriikatArvosana`, `kuva`) "+
    " VALUES (4, 'GFriend', 'Navillera', 10, 8, 9, 10, null)";
    db.run(sql, function(err) {
        if (err) {
            return console.log(err.message);
        }
        console.log("Rivi lisättiin");
    });

    sql = "INSERT INTO `Kappale` (`id`, `artisti`, `kappale`, `musiikkiArvosana`, `mvArvosana`, `koreografiaArvosana`, `lyriikatArvosana`, `kuva`) "+
    " VALUES (5, 'Whee In feat. Sik-K', 'Easy', 9, 9, 8, 10, null)";
    db.run(sql, function(err) {
        if (err) {
            return console.log(err.message);
        }
        console.log("Rivi lisättiin");
    });

    sql = "INSERT INTO `Kappale` (`id`, `artisti`, `kappale`, `musiikkiArvosana`, `mvArvosana`, `koreografiaArvosana`, `lyriikatArvosana`, `kuva`) "+
    " VALUES (6, 'N.Flying', 'Hot Potato', 10, 10, 8, 10, null)";
    db.run(sql, function(err) {
        if (err) {
            return console.log(err.message);
        }
        console.log("Rivi lisättiin");
    });

    sql = "INSERT INTO `Kappale` (`id`, `artisti`, `kappale`, `musiikkiArvosana`, `mvArvosana`, `koreografiaArvosana`, `lyriikatArvosana`, `kuva`) "+
    " VALUES (7, 'Lovelyz', '지금, 우리', 10, 7, 7, 10, null)";
    db.run(sql, function(err) {
        if (err) {
            return console.log(err.message);
        }
        console.log("Rivi lisättiin");
    });

    db.each("SELECT id, artisti, kappale FROM Kappale", function(err, row) {
        if (err) {
          return console.log(err.message);
        }
        console.log(row.id + ", " + row.artisti + " - " + row.kappale);
    });

    db.close();
});
