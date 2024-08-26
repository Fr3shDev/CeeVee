import { CreateUserDto } from "dtos/CreateUser.dto";
import { Request, Response } from "express";

export function getUsers(request: Request, response: Response) {
    response.send([]);
}

export function getUser(request: Request, response: Response) {
    response.send({});
}

export function createUser(request: Request<{}, {}, CreateUserDto>, response: Response) {
    
}