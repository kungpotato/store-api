'use strict';
module.exports = function(app) {
  var Vender = require('../controllers/storeController');
  var UserAuth = require('../controllers/authController');

  // Order Routes
  app.route('/orders')
    .get(Vender.list_all_orders)
    .post(Vender.create_an_order);


  app.route('/orders/:orderId')
    .get(Vender.read_an_order)
    .put(Vender.update_an_order)
    .delete(Vender.delete_an_order);

  // User Routes
  app.route('/auths')
  .get(UserAuth.list_all_users)
  .post(UserAuth.create_an_user);


app.route('/auths/:userId')
  .get(UserAuth.read_an_user)
  .put(UserAuth.update_an_user)
  .delete(UserAuth.delete_an_user);
};
