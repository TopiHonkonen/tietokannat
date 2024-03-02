const db = require('../database');

const opiskelija = {
  getAll: function(callback) {
    return db.query('select * from Opiskelija', callback);
  },
  getById: function(id, callback) {
    return db.query('select * from Opiskelija where idOpiskelija=?', [id], callback);
  },
  add: function(opiskelija, callback) {
    return db.query(
      'insert into Opiskelija (etunimi,sukunimi,luokkatunnus) values(?,?,?)',
      [opiskelija.etunimi, opiskelija.sukunimi, opiskelija.luokkatunnus],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from Opiskelija where idOpiskelija=?', [id], callback);
  },
  update: function(id, opiskelija, callback) {
    return db.query(
      'update Opiskelija set etunimi=?,sukunimi=?, luokkatunnus=? where idOpiskelija=?',
      [opiskelija.etunimi, opiskelija.sukunimi, opiskelija.luokkatunnus, id],
      callback
    );
  }
};
module.exports = opiskelija;
