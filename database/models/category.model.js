import mongoose, { Schema } from "mongoose"
<<<<<<< HEAD
import { productModel } from "./product.model.js";
=======
>>>>>>> origin/master

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: [true, 'category name must be unique'],
        minLength: [2, 'category name must be at least 2 characters']
    },
    slug: {
        type: String,
        required: true,
        lowercase: true,
    },
    img: {
        type: String,
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'user',
    }
}, { timestamps: true })

<<<<<<< HEAD
categorySchema.post('init', function (doc) {
    doc.img = process.env.BASE_URL + '/uploads/' + doc.img
})

// Pre-delete middleware to remove associated products when a category is deleted
categorySchema.pre('findOneAndDelete', async function (next) {
    const category = await this.model.findOne(this.getQuery()); 
    if (category) {
        await productModel.deleteMany({ category: category._id }); 
    }
    next();
});
=======
categorySchema.post('init',function(doc){
    doc.img=process.env.BASE_URL+'/uploads/'+doc.img
})

>>>>>>> origin/master
export const categoryModel = mongoose.model('category', categorySchema)