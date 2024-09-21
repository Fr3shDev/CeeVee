"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createApp_1 = require("./createApp");
const dotenv_1 = __importDefault(require("dotenv"));
const helmet_1 = __importDefault(require("helmet"));
const morgan = require("morgan");
const config_1 = __importDefault(require("config"));
dotenv_1.default.config();
const app = (0, createApp_1.createApp)();
app.use((0, helmet_1.default)());
console.log('Current NODE_ENV:', process.env.NODE_ENV);
console.log(config_1.default);
console.log('Application Name: ' + config_1.default.get('name'));
console.log('Mail Server: ' + config_1.default.get('mail.host'));
if (app.get('env') === 'development') {
    app.use(morgan('tiny'));
    console.log('Morgan enabled...');
}
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Running on Port ${port}`);
});
//# sourceMappingURL=index.js.map