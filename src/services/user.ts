import bcrypt from "bcrypt";
import { User } from "../models/user";
import { UserInterface } from "interfaces/user.interface";
import _ from "lodash";

export async function registerUserService(user: UserInterface) {
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