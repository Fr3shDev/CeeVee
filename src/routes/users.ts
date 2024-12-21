import { Router, Request, Response } from "express";
import { createUser, getUser, getUsers } from "../handlers/users";
import { User, validateUser } from "../models/user";
import _ from "lodash";

const router = Router();



router.post('/', async (request: Request, response: Response): Promise<void> => {
    const { error } = validateUser(request.body);
    if (error){
        response.status(400).send(error.details[0].message);  
        return;
    } 

    let user = await User.findOne({ email: request.body.email})
    if (user) {
        response.status(400).send('User already registered');
        return;
    }

    user = new User(_.pick(request.body, ['username', 'email', 'password']));

    await user.save();

    response.send(_.pick(user, ['_id', 'username', 'email']));
});

// /api/users
router.get('/', getUsers);

// /api/users/123
router.get('/:id', getUser);

// /api/users
router.post('/', createUser)

export default router;