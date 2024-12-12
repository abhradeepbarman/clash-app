import express from "express";
import "dotenv/config";
import { sendEmail } from "./config/mail";
import { generateWelcomeEmail } from "./email-templates/welcomeEmailBody";

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", async (req, res) => {
    await sendEmail(
        "anythingabhra@gmail.com",
        "Welcome to Clash",
        generateWelcomeEmail("Abhra")
    );
    res.send("Hello World")
});

app.listen(port, () => {
    console.log(`Server is running at PORT ${port}`);
});
