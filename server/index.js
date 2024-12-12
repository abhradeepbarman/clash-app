"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const path_1 = __importDefault(require("path"));
const url_1 = require("url");
const __dirname = path_1.default.dirname((0, url_1.fileURLToPath)(import.meta.url));
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
// set view engine
app.set("view engine", "ejs");
app.set("views", path_1.default.resolve(__dirname, "./views"));
app.get("/", (req, res) => {
    res.render("welcome");
});
app.listen(port, () => {
    console.log(`Server is running at PORT ${port}`);
});
