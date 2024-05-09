const mongoose = require('mongoose');
const AcademicYear = require('./AcademicYear');

const yearGroupSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        
    },
    createdby:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Admin',
        required:true
    },
    academicYear:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'AcademicYear',
        required:true
    }
}, 
{
    timestamps:true
})

const YearGroup = mongoose.model('YearGroup',yearGroupSchema);

module.exports = YearGroup;