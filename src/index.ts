import { createApp } from "./createApp";
import passport from "passport";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan = require("morgan");
import mongoose from "mongoose";

mongoose.connect('mongodb://localhost/ceevee').then(() => console.log('Connected to MongoDB')).catch(error => console.error('Could not connect to MongoDB', error))

// The order of imports is important
dotenv.config();
import config from "config";

const app = createApp();
app.use(helmet());

console.log('Application Name: ' + config.get('name'))
console.log('Mail Server: ' + config.get('mail.host'))
console.log('Mail PASSWORD: ' + config.get('mail.password'))

if (app.get('env') === 'development') {
    app.use(morgan('tiny'));
    console.log('Morgan enabled...');
}
const port = process.env.PORT || 5000;


app.listen(port, () => {
    console.log(`Running on Port ${port}`);
});