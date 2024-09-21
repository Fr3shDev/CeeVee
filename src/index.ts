import { createApp } from "./createApp";
import passport from "passport";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan = require("morgan");
import config from "config";

dotenv.config();

const app = createApp();
app.use(helmet());
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