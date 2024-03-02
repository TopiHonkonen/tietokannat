const db = require('../database');

const arviointi = {
  getAll: function(callback) {
    return db.query('select * from Arviointi', callback);
  },
  getById: function(id, callback) {
    return db.query('select * from Arviointi where idArviointi=?', [id], callback);
  },
  add: function(arviointi, callback) {
    return db.query(
      'insert into Arviointi (idOpintojakso,idOpiskelija,Arvosana,Paivamaara) values(?,?,?,?)',
      [arviointi.id_opintojakso, arviointi.id_opiskelija, arviointi.arvosana, arviointi.paivamaara],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from Arviointi where idArviointi=?', [id], callback);
  },
  update: function(id, arviointi, callback) {
    return db.query(
      'update Arviointi set idOpintojakso=?, idOpiskelija=?, Arvosana=?, Paivamaara=? where idArviointi=?',
      [arviointi.id_opintojakso, arviointi.id_opiskelija, arviointi.arvosana, arviointi.paivamaara, id],
      callback
    );
  }
};
module.exports = arviointi;
