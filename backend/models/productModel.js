import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type:String, required: true},
    description: { type: String, required: true},
    price: { type:Number, required: true},
    image: { type: Array, required: true },
    category:{ type: String,enum:["Eye","Shampoo","Face"], required: true},
    brand:{ type: String,enum:["Alterna","Tarte","Isdin"], required: true },
    bestseller:{ type: Boolean }
})

const productModel = mongoose.models.product || mongoose.model("product", productSchema)

export default productModel