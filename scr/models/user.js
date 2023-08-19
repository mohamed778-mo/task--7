
const mongoose = require('mongoose')
const validator=require ('validator')


const User = mongoose.model("User",{


    username :{
        type : String,
        required : true,
        trim :true,     
    }

    ,password :{
        type : String,
        required :true,
        trim :true,
        lowercase :true,
        minlenght: 9,
    },

    email:{
        type:String,
        required:true,
        unique:true,
        validate(value){
          if (!validator.isEmail(value)) {
            throw new Error ("not valid email")
          }  
        }
        
    },
    age:{
        type:Number,
        default:18,
        validate(value){
            if (value <= 0 ) {
              throw new Error ("must positive num")
            }  
          }
    },
    city:{
        type:String,

    }

})

module.exports = User