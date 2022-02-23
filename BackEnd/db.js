const mongoose = require('mongoose');
require('dotenv').config({ path: './BackEnd/.env.local' ,  });
const mongoURI = process.env.REACT_APP_MONGODBURI

const ConnectToMongo = () => {
   mongoose.connect(mongoURI).then(() => { console.log("Connected to MongoDB") }).catch(err => { console.log("Error: ", err) });
}

module.exports = ConnectToMongo;

