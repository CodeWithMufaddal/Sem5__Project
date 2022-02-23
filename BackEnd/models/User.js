const mongoose = require('mongoose');
const { Schema } = mongoose;
const UserSchema = new Schema({
   name: { type: String, required: true },

   email: { type: String, required: true, unique: true },

   password: { type: String, required: true },

   // address: {
   //    country: { type: String, required: true },
   //    code:{ type: Number , required: true },
   //    street: { type: String, required: true },
   //    house: { type: String, required: true },
   //    apartment: String , 
   //    landmark: { type: String, required: true },
   // },

   date: { type: Date, default: Date }
})

const User = mongoose.model('User', UserSchema);
module.exports = User;