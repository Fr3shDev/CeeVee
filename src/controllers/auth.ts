import {Request, Response } from "express-serve-static-core";
import { User, validateNewUser, validateUser } from "../models/user";
import _ from "lodash";
import bcrypt from "bcrypt";
import { loginUserService, registerUserService } from "../services/user";
import { AuthResponseInterface } from "interfaces/user.interface";

export async function registerUser (request: Request, response: Response) {
    const { error } = validateNewUser(request.body);
    if (error) {
        response.status(400).send(error.details[0].message);
        return;
    }

    try {
        const user = await registerUserService(request.body);
        response.status(201).send(user);
    } catch (error) {
        const err = error as Error;
        response.status(400).send(err.message);
    }
}

export async function loginUser (request: Request, response: Response) {
    const { error } = validateUser(request.body);
    if (error) {
        response.status(400).send(error.details[0].message);
        return;
    }

    try {
        const authResponse: AuthResponseInterface = await loginUserService(request.body);
        response.status(200).send(authResponse);
    } catch (error) {
        const err = error as Error;
        response.status(400).send(err.message);
    }
}
