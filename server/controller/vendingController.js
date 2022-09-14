const { resourceLimits } = require('worker_threads');
const { VendingMachine } = require('../model/vendingModel');

const vendingController = {};

// ADD COIN
// INCREMENT ONE COIN AND SET HEADER TO X-COINS: TOTAL NUMBER OF ACCEPTED COINS
vendingController.addCoin = (req, res, next) => {
    VendingMachine.findOneAndUpdate({name: "vendingMachineOne"}, {$inc : {'coin' : 1}}, {new: true},
    function (err, coinCount) {
        if (err) return next('Error in addCoin middleware');
        res.set('X-Coins' , coinCount.coin)
        return next()
    });
}

// DELETE COINS
// SET HEADER TO X-COINS: TOTAL RETURNED COINS AND SET COIN COUNT TO 0
vendingController.deleteCoin = (req, res, next) => {
    VendingMachine.findOne({name: "vendingMachineOne"},
    function (err, returnCoinCount) {
        if (err) return next('Error in deleteCoin middleware');
        res.set('X-Coins' , returnCoinCount.coin)
    });
    VendingMachine.findOneAndUpdate({name: "vendingMachineOne"}, {'coin' : 0}, {new: true},
    function (err, coinCount) {
        if (err) return next('Error in deleteCoin middleware');
        return next()
    });
}

// GET INVENTORY
// RETURN ARRAY OF REMAINING ITEM QUANTITIES
vendingController.getInventory = (req, res, next) => {
    VendingMachine.findOne({name: "vendingMachineOne"},
    function (err, inventory) {
        if (err) return next('Error in inventory middleware');
        res.locals = [inventory.beverageOne.quantity, inventory.beverageTwo.quantity, inventory.beverageThree.quantity]
        return next();
    });
}

// GET BEVERAGE INVENTORY
// RETURN REMAINING ITEM QUANTITY
vendingController.getBeverageInventory = (req, res, next) => {
    const beverageMap = {
        '1' : 'beverageOne',
        '2' : 'beverageTwo',
        '3' : 'beverageThree'
    }
    const { id } = req.params;
    const beverageCode = beverageMap[id];
    VendingMachine.findOne({name: "vendingMachineOne"},
    function (err, beverage) {
        if (err) return next('Error in inventory middleware');
        res.locals = beverage[beverageCode].quantity;
        return next();
    });
}

// BUY BEVERAGE
// SET HEADERS TO COINS TO BE RETURNED AND ITEMS REMAINING; RETURN NUMBER OF ITEMS VENDED IN BODY
// IF ITEM IN OUT OF STOCK, SET HEADER TO NUMBERS OF COIN ACCPETED
// IF COINS ARE INSUFFICIENT, SET HEADER X-COINS : 0|1
vendingController.buyBeverage = (req, res, next) => {
    const beverageMap = {
        '1' : 'beverageOne',
        '2' : 'beverageTwo',
        '3' : 'beverageThree'
    }
    const { id } = req.params;
    const beverageCode = beverageMap[id];
    VendingMachine.findOne({name: "vendingMachineOne"},
    function (err, beverage) {
        if (err) {
            return next('Error in inventory middleware');
        } else if (beverage[beverageCode].quantity === 0){
            res.status(404);
            res.set('X-Coins', beverage.coin);
            res.locals = "Out of Stock";
            return res.json(res.locals);
        } else if (beverage.coin < 2){
            res.set('X-Coins', 2 - beverage.coin)
            res.locals = "Insufficient Funds";
            res.status(403)
            return res.json(res.locals);
        } else {
            const key = `${beverageCode}.quantity`;
            VendingMachine.findOneAndUpdate({name: "vendingMachineOne"}, {$inc : {[key] : -1}}, {new: true},
                function (err, boughtBeverage) {
                    if (err) return next('Error in addCoin middleware');
                    res.status(200)
                    res.set('X-Inventory', boughtBeverage[beverageCode].quantity)
                    res.locals = 5 - (boughtBeverage[beverageCode].quantity);
                    return next();
            });
        }
    });
}


module.exports = vendingController;