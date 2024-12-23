import {Request, Response } from "express-serve-static-core";
import { User, validateUser } from "../models/user";
import _ from "lodash";
import bcrypt from "bcrypt";
import { registerUserService } from "../services/user";

export async function registerUser (request: Request, response: Response) {
    const { error } = validateUser(request.body);
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
