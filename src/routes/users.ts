import { Router } from "express";
import { getUser, getUsers } from "../handlers/users";

const router = Router();

router.get('/', getUsers);

router.get('/:id', getUser);

export default router;