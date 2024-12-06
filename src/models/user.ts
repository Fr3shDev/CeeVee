import Joi from "joi";
import mongoose from "mongoose";

interface User {
    username: string;
    email: string;
    password: string;
}

const userSchema = mongoose.model('User', new mongoose.Schema({
    username: {
        type: String, 
        required: true, 
        minlength: 5,
        maxlength: 50,
    },
    email: {
        type: String, 
        required: true, 
        minlength: 5,
        maxlength: 255,
        unique: true
    },
    password: {
        type: String, 
        required: true, 
        minlength: 5,
        maxlength: 1024,
    }
}));

function validateUser(user: User) {

    const schema = Joi.object({
        username: Joi.string().min(5).max(50).required(),
        email: Joi.string().min(5).max(255).required().email(), 
        password: Joi.string().min(5).max(1024).required(),
    });

    return schema.validate(user);
}

export { userSchema, validateUser, User };