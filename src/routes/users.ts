import { Router, Request, Response, RequestHandler } from "express";
import { createUser, getUser, getUsers } from "../handlers/users";
import { User, validateUser } from "models/user";
import mongoose from "mongoose";

const router = Router();



router.post('/', async (req: Request, res: Response) => {
    const { error } = validateUser(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({ email: req.body.email})
    if (user) return res.status(400).send('User already registered');

    user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });

    await user.save();

    res.send(user);
}) as RequestHandler;

// /api/users
router.get('/', getUsers);

// /api/users/123
router.get('/:id', getUser);

// /api/users
router.post('/', createUser)

export default router;