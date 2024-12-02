import { createApp } from "./createApp";
import passport from "passport";

const app = createApp();
const PORT = 3000;


app.listen(PORT, () => {
    console.log(`Running on Port ${PORT}`);
});