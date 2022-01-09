const mongoose = require('mongoose');
require('dotenv').config({ path: './.env.local' });
const mongoURI = process.env.MONGODBURI

const ConnectToMongo = () => {
   mongoose.connect(mongoURI).then(() => { console.log("Connected to MongoDB") }).catch(err => { console.log("Error: ", err) });
}
module.exports = ConnectToMongo;


