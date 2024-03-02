const db = require('../database');

const opintojakso = {
  getAll: function(callback) {
    return db.query('select * from Opintojakso', callback);
  },
  getById: function(id, callback) {
    return db.query('select * from Opintojakso where idOpintojakso=?', [id], callback);
  },
  add: function(opintojakso, callback) {
    return db.query(
      'insert into Opintojakso (Koodi,Laajuus,Nimi) values(?,?,?)',
      [opintojakso.koodi, opintojakso.laajuus, opintojakso.nimi],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from Opintojakso where idOpintojakso=?', [id], callback);
  },
  update: function(id, opintojakso, callback) {
    return db.query(
      'update Opintojakso set Koodi=?,Laajuus=?, Nimi=? where idOpintojakso=?',
      [opintojakso.koodi, opintojakso.laajuus, opintojakso.nimi, id],
      callback
    );
  }
};
module.exports = opintojakso;
