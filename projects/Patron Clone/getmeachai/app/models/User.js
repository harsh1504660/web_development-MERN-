import mongoose from "mongoose";

const {Schema , model} = mongoose;

const UserScheme = new Schema({
    email:{type:String , requierd:true},
    name:{type:String },
    username:{type:String , requierd:true},
    Profilpic : {type:String},
    coverpic : {type:String},
    creatAT : {type :Date,default:Date.now},
    updateAT : {type :Date,default:Date.now},
});

export default mongoose.models.User || model("User",UserScheme);