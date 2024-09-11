import { createApp } from "./createApp";
import passport from "passport";
import dotenv from "dotenv";
import helmet from "helmet";

dotenv.config();

const app = createApp();
app.use(helmet());
const port = process.env.PORT || 5000;


app.listen(port, () => {
    console.log(`Running on Port ${port}`);
});