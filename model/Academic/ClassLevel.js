const mongoose = require('mongoose')

const {Schema} = mongoose;

const ClassLevelSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    
        description:{
            type:String,
        },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Admin',
        required:true,
    },
    students:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Student',
    
    },
    subjects:
    [{
        type: SchemaTypes.ObjectId,
        ref:"Student",
    },
],
    teachers:[{
        type: SchemaTypes.ObjectId,
        ref:"Teacher",
    },
],
  },  {
        timestamps:true,
    }
)

const ClassLevel = mongoose.model('ClassLevel',ClassLevelSchema)

module.exports = ClassLevel;