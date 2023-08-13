const mongoose  = require("mongoose");
const employeeSchema = new mongoose.Schema({
    // Name : {
    //     type : String,
    //     required : true
    // },
    // Age : {
    //     type : Number,
    //     required : true
    // },
    // Gender : {
    //     type : String,
    //     required : true
    // },
    Email : {
        type : String,
        required : true,
        unique : true
    },
    // Mobile : {
    //     type : Number,
    //     required : true,
    //     unique : true
    // },
    password : {
        type : String,
        required : true
    },
    confirmpassword : {
        type : String,
        required : true
    }
});

const Register = new mongoose.model("Registers", employeeSchema);

module.exports = Register;