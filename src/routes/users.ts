import { Router } from "express";
import { createUser, getUser, getUsers, registerUser } from "../controllers/users";

const router = Router();



router.post('/', registerUser);

// /api/users
router.get('/', getUsers);

// /api/users/123
router.get('/:id', getUser);

// /api/users
router.post('/', createUser)

export default router;