import { Router } from "express";
import { registerUser } from "../controllers/auth";

const router = Router();



router.post('/', registerUser);

export default router;