import { Router, Request, Response } from "express";
import { createUser, getUser, getUsers } from "../handlers/users";
import { User, validateUser } from "models/user";
import mongoose from "mongoose";

const router = Router();



router.post('/', async (request: Request, response: Response): Promise<void> => {
    const { error } = validateUser(request.body);
    if (error) return response.status(400).send(error.details[0].message);

    let user = await User.findOne({ email: request.body.email})
    if (user) return response.status(400).send('User already registered');

    user = new User({
        username: request.body.username,
        email: request.body.email,
        password: request.body.password
    });

    await user.save();

    response.send(user);
});

// /api/users
router.get('/', getUsers);

// /api/users/123
router.get('/:id', getUser);

// /api/users
router.post('/', createUser)

export default router;