import { CreateUserDto } from "dtos/CreateUser.dto";
import { NextFunction, Request, Response } from "express-serve-static-core";
import { User, validateUser } from "models/user";
import { CreateUserQueryParams } from "types/query-params";
import { UserResponseInterface } from "types/response";

// export async function registerUser (request: Request, response: Response, next: NextFunction) {
//     const { error } = validateUser(request.body);
//     if (error) return response.status(400).send(error.details[0].message);

//     let user = await User.findOne({ email: request.body.email})
//     if (user) return response.status(400).send('User already registered');

//     user = new User({
//         username: request.body.username,
//         email: request.body.email,
//         password: request.body.password
//     });

//     await user.save();

//     response.send(user);
// }

export function getUsers(request: Request, response: Response) {
    response.send([]);
}

export function getUser(request: Request, response: Response) {
    response.send({});
}

export function createUser(request: Request<{}, {}, CreateUserDto, CreateUserQueryParams>, response: Response<UserResponseInterface>) {
    response.status(201).send({
        id: 1,
        username: "Hans",
        email: "hans@gmail.com"
    })
}