import mongoose  from "mongoose";

const reviewSchema = new mongoose.Schema({
    email: {
        type:String,
        required : true,
        unique: true
    },
    name:{
        type: String,
        required:true
    },
    rating : {
        type:Number,
        required: true
    },
    Comment:{
        type:String,
        required:true
    },
    date : {
        type:Date,
        required:true,
        default:Date.now()
    },
    profilePicture :{
        type:String,
        required:true,
        default:"https://goldsmithwebb-opticians.co.uk/about-us/meet-the-team/chelmsford/933-9332131_profile-picture-default-png-19/"
    },
    isApproved : {
        type : Boolean,
        required: true,
        default: false
    }
})

const Review = mongoose.model("Review",reviewSchema);

export default Review;