import { Router, Request, Response } from "express";
import { createUser, getUser, getUsers } from "../handlers/users";
import { userSchema, validateUser } from "models/user";
import mongoose from "mongoose";

const router = Router();

router.post('/', async (request: Request, response: Response) => {
    
});

// /api/users
router.get('/', getUsers);

// /api/users/123
router.get('/:id', getUser);

// /api/users
router.post('/', createUser)

export default router;