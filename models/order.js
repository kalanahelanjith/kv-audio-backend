import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    orderId : {
        type:String,
        require:true,
        unique:true
    },
    email:{
        type:String,
        required:true
    },
    orderDate:{ 
        type:Date,
        required:true,
        default:Date.now
    },
    orderedItem:{
        type:[
            {
                Product:{
                    key:{
                        type:String,
                        required:true
                    },
                    name:{
                        type:String,
                        required:true
                    },
                    image:{
                        type:String,
                        required:true
                    },
                    price:{
                        type:Number,
                        required:true
                    }
                },
                quantity:{
                    type:Number,
                    required:true
                }
            }
        ],
        required:true
    },
    days:{
        type:Number,
        required:true
    },
    startingDate:{
        type:Date,
        required:true
    },
    endingDate:{
        type:Date,
        required:true
    },
    isApproved:{
        type:Boolean,
        required:true,
        default:false
    },
    totalAmount:{
        type:Number,
        required:true
    },
})

const Order = mongoose.model("Orderss",orderSchema);

export default Order;