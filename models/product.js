import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    key:{
        type:String,
        required:true,
        unique:true 
    },
    name: {
        type : String,
        required : true,
    },
    price : {
        type: Number,
        required: true,
    },
    category:{
        type:String,
        required:true,
        default:"uncategorized"
    },
    dimensions :{ 
        type: String,
        required:true
    },
    description: {
        type: String,
        required: true,
    },
    availability:{
        type:Boolean,
        required:true,
        default:true
    },
    image:{
        type:[String],
        required:true,
        default:["https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.philips.co.in%2Fc-m-so%2Fhome-audio&psig=AOvVaw0RfGX3ZMAgP4ft7aTEWpUZ&ust=1736930691341000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCMitm5zp9IoDFQAAAAAdAAAAABAE"]
    }
})

const Product = mongoose.model("Product",productSchema);

export default Product;
