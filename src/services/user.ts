import bcrypt from "bcrypt";
import { User } from "../models/user";
import { UserInterface, NewUserInterface } from "interfaces/user.interface";
import _ from "lodash";
import jwt from "jsonwebtoken";


export async function registerUserService(user: NewUserInterface) {
    const existingUser = await User.findOne({ email: user.email});
    if (existingUser) {
        throw new Error('User already registered');
    }

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    const newUser = new User(_.pick(user, ['username', 'email', 'password']));
    await newUser.save();

    return _.pick(newUser, ['id', 'email', 'username']);
}

export async function loginUserService(user: UserInterface) {
    const existingUser = await User.findOne({ email: user.email});
    if (!existingUser) {
        throw new Error('Invalid email or password');
    }

    const validPassword = await bcrypt.compare(user.password, existingUser.password);
    if (!validPassword) {
        throw new Error('Invalid email or password');
    }

    const accessToken = jwt.sign({ id: existingUser._id, username: existingUser.username, email: existingUser.email}, 'jwtPrivateKey');

    return {
        id: existingUser._id.toString(),
        username: existingUser.username,
        email: existingUser.email,
        accessToken
    }
}