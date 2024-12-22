import { Router, Request, Response } from "express";
import { createUser, getUser, getUsers, registerUser } from "../handlers/users";
import { User, validateUser } from "../models/user";
import _ from "lodash";
import bcrypt from "bcrypt";

const router = Router();



router.post('/', registerUser);

// /api/users
router.get('/', getUsers);

// /api/users/123
router.get('/:id', getUser);

// /api/users
router.post('/', createUser)

export default router;