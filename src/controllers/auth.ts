import { CreateUserDto } from "dtos/CreateUser.dto";
import {Request, Response } from "express-serve-static-core";
import { User, validateUser } from "../models/user";
import { CreateUserQueryParams } from "types/query-params";
import { UserResponseInterface } from "types/response";
import _ from "lodash";
import bcrypt from "bcrypt";

export async function registerUser (request: Request, response: Response) {
    const { error } = validateUser(request.body);
    if (error) {
        response.status(400).send(error.details[0].message);
        return;
    }

    let user = await User.findOne({ email: request.body.email})
    if (user) {
        response.status(400).send('User already registered');
        return;
    }

    user = new User(_.pick(request.body, ['username', 'email', 'password']));
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    await user.save();

    response.send(_.pick(user, ['id', 'email', 'username']));
}
