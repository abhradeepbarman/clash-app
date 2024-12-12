import express from "express";
import "dotenv/config";
import path from "path";
import { fileURLToPath } from "url";
const currentDir = __dirname; 

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// set view engine
app.set("view engine", "ejs");
app.set("views", path.resolve(currentDir, "./views"));

app.get("/", (req, res) => {
    res.render("welcome");
});

app.listen(port, () => {
    console.log(`Server is running at PORT ${port}`);
});
