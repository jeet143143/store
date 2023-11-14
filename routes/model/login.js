const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
  username: {
      type: String,
  }, 
  email: {
      type: String,
  },
   content: {
    type: String
},
   tel:{
    type:Number
   },
   area:{
    type:String
   },
   number:{
    type:Number
   }
})
  
  const User = mongoose.model('User', userSchema);


module.exports = product;