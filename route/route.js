'use strict'

var express = require('express');
var router = express.Router();
var controller = require('../controller/controller');

/**
 * Route to GET and list the vehicles per page.
 */
router.get('/fleetapi/vehicles/:page', function(req, resp) {
  controller.getByPage(req, resp);
});

/**
 * Route to a POST and create a new vehicle.
 */
router.post('/fleetapi/vehicle', function(req, resp) {
  controller.add(req, resp);
});

/**
 * Route to a PUT and update a vehicle.
 */
router.put('/fleetapi/vehicle/:id', function(req, resp) {
  controller.update(req, resp);
});

/**
 * Route to DELETE and remove one or more vehicles.
 */
router.delete('/api/companies/:id', function(req, resp) {
  controller.delete(req, resp);
});

module.exports = router;
