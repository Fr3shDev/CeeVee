import { CreateUserDto } from "dtos/CreateUser.dto";
import { Request, Response } from "express-serve-static-core";
import { CreateUserQueryParams } from "types/query-params";
import { User } from "types/response";

export function getUsers(request: Request, response: Response) {
    response.send([]);
    request.customField
}

export function getUser(request: Request, response: Response) {
    response.send({});
}

export function createUser(request: Request<{}, {}, CreateUserDto, CreateUserQueryParams>, response: Response<User>) {
    response.status(201).send({
        id: 1,
        username: "Hans",
        email: "hans@gmail.com"
    })
}