import mongoose from "mongoose"
<<<<<<< HEAD
import { productModel } from "./product.model.js";
=======
>>>>>>> origin/master

const brandSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: [true, 'brand name must be unique'],
        minLength: [2, 'brand name must be at least 2 characters']
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

brandSchema.post('init', function (doc) {
    doc.img = process.env.BASE_URL + '/uploads/' + doc.img
})

<<<<<<< HEAD
brandSchema.pre('findOneAndDelete', async function (next) {
    const brand = await this.model.findOne(this.getQuery());
    if (brand) {
        await productModel.deleteMany({ brand: brand._id });
    }
    next();
});

=======
>>>>>>> origin/master
export const brandModel = mongoose.model('brand', brandSchema)