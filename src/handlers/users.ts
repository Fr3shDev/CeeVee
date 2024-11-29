import { Request, Response } from "express";

export function getUsers(request: Request, response: Response) {
    response.send([]);
}

export function getUser(request: Request, response: Response) {
    response.send({});
}