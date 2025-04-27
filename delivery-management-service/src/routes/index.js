const express = require('express');
const { getDelivery } = require('../controllers/deliveryController');
const { getDriverDelivery } = require('../controllers/deliveryController');
const { getDriverCurrentDelivery } = require('../controllers/deliveryController');

const router = express.Router();

router.get('/deliveries/:id', getDelivery);
router.get('/deliveriesdriver/:driverId', getDriverDelivery);
router.get('/deliveriesdriver/current/:driverId', getDriverCurrentDelivery);


module.exports = router;