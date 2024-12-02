import { createApp } from "./createApp";
import passport from "passport";
import dotenv from "dotenv";

dotenv.config();

const app = createApp();
const port = process.env.PORT || 5000;


app.listen(port, () => {
    console.log(`Running on Port ${port}`);
});