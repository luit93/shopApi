const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema(
    {
        productname:{type:String,required:true,unique:true},
        description:{type:String,required:true,unique:true},
        image:{type:String,required:true},
        category:{type:Array},
        size:{type:String},
        color:{type:String},
        price:{type:Number ,required:true},
    },
    {timestamps:true}
)


module.exports = mongoose.model("Product",ProductSchema)