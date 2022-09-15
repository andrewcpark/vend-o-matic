const express = require('express');
const router = express.Router();
const vendingController = require('../controller/vendingController');

// router.get('/', (req, res) => {
//   return res.status(200).static(path.join(__dirname, "../client/public", "index.html"));
// });

// router.get('/', (req, res) => {
//     return res.status(200).static(path.join(__dirname, "../client/public/index.html"));
//   });

router.put('/', vendingController.addCoin, (req, res) => {
    return res.sendStatus(204);
});

router.delete('/', vendingController.deleteCoin, (req, res) => {
    return res.sendStatus(204);
});

router.get('/inventory', vendingController.getInventory, (req, res) => {
    return res.status(200).json(res.locals);
});

router.get('/inventory/:id', vendingController.getBeverageInventory, (req, res) => {
    return res.status(200).json(res.locals);
});

router.put('/inventory/:id', vendingController.buyBeverage, vendingController.deleteCoin, (req, res) => {
    return res.json(res.locals);
});


module.exports = router;