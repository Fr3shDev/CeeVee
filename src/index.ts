import dotenv from "dotenv";
dotenv.config();
import { createApp } from "./createApp";
// The order of imports is important
import config from "config";
import cors from "cors";
import helmet from "helmet";
import morgan = require("morgan");
import mongoose from "mongoose";

mongoose.connect('mongodb://localhost/ceevee').then(() => console.log('Connected to MongoDB')).catch(error => console.error('Could not connect to MongoDB', error))


if(!config.get('jwtPrivateKey')) {
    console.error('FATAL ERROR: CeeVee_JWT_PRIVATE_KEY is not defined.');
    process.exit(1);
}

const app = createApp();
app.use(helmet());
app.use(cors());

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