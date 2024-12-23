import Joi from "joi";
import mongoose from "mongoose";
import { NewUserInterface, UserInterface } from "interfaces/user.interface";

// This returns a class so we use pascal naming convention 'User'
const User = mongoose.model('User', new mongoose.Schema({
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
    },
    date: {
        type: Date,
        default: Date.now
    }
}));

function validateNewUser(user: NewUserInterface) {

    const schema = Joi.object({
        username: Joi.string().min(5).max(50).required(),
        email: Joi.string().min(5).max(255).required().email(), 
        password: Joi.string().min(5).max(1024).required(),
    });

    return schema.validate(user);
}

function validateUser(user: UserInterface) {
    const schema = Joi.object({
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(1024).required(),
    });

    return schema.validate(user);
}

export { User, validateNewUser, validateUser };