import { createApp } from "./createApp";
import passport from "passport";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan = require("morgan");

dotenv.config();
import config from "config";

const app = createApp();
app.use(helmet());

console.log('Current NODE_ENV:', process.env.NODE_ENV);

console.log('NODE_ENV (from process.env):', process.env.NODE_ENV);
console.log('Config Environment (from config):', config.util.getEnv('NODE_ENV'));


console.log(config)
console.log('Application Name: ' + config.get('name'))
console.log('Mail Server: ' + config.get('mail.host'))
if (app.get('env') === 'development') {
    app.use(morgan('tiny'));
    console.log('Morgan enabled...');
}
const port = process.env.PORT || 5000;


app.listen(port, () => {
    console.log(`Running on Port ${port}`);
});