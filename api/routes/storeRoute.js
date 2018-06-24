'use strict';
module.exports = function(app) {
  var Vender = require('../controllers/storeController');

  // Order Routes
  app.route('/orders')
    .get(Vender.list_all_orders)
    .post(Vender.create_an_order);


  app.route('/orders/:orderId')
    .get(Vender.read_an_order)
    .put(Vender.update_an_order)
    .delete(Vender.delete_an_order);
};
