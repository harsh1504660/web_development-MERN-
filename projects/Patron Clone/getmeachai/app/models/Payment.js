import mongoose from "mongoose";
const {Schema , model } = mongoose;

const PaymentSchema = new Schema({
    name:{type:String , requierd:true},
    to_user:{type:String , requierd:true},
    order_id:{type:String , requierd:true},
    message:{type:String},
    ampunt:{type:Number , requierd:true},
    creatAT : {type :Date,default:Date.now},
    updateAT : {type :Date,default:Date.now},
    done:{type:Boolean , requierd:false},
})


export default mongoose.models.Payment || model("Payment",PaymentSchema);