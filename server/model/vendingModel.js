const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// MONGODB CLUSTER URL
const url = 'mongodb+srv://vendomatic:sparklingwater@cluster0.crvuqc5.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(url,{
    useNewUrlParser: true,
    dbName: 'vend-o-matic'
})
.then(() => console.log("Connected to Vend-O-Matic DB."))
.catch((err) => console.log(err));

const vendingSchema = new Schema({
    name: String,
    coin: Number,
    beverageOne: Object,
    beverageTwo: Object,
    beverageThree: Object
})

const VendingMachine = mongoose.model("VendingMachine", vendingSchema);

module.exports = { VendingMachine };