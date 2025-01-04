import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    email: {
        type : String,
        required: true,
        unique: true,
    },
    password : {
        type: String,
        required : true,
    },
    role : {
        type : String,
        required : true,
        default: "customer"
    },
    fristName : {
        type: String,
        required: true,
    },
    lastName : {
        type : String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    profilePicture : {
        type : String,
        required : true,
        default:"https://goldsmithwebb-opticians.co.uk/about-us/meet-the-team/chelmsford/933-9332131_profile-picture-default-png-19/"
    },
});

const User = mongoose.model("User", userSchema);

export default User;
