const taskBuilder = require('../controllers/locController');

module.exports = app => {
  app
    .route('/locs')
    .get(locBuilder.list_all_locs)
    .post(locBuilder.create_a_loc);

  app
    .route('/locs/:locId')
    .get(locBuilder.read_a_loc)
    .put(locBuilder.update_a_loc)
    .delete(locBuilder.delete_a_loc);
};