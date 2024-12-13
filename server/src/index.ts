import express, { Express, Request, Response } from "express";
import "dotenv/config";
import { sendMail } from "./config/mail";
import { generateWelcomeEmail } from "./mailTemplates/welcomeEmailBody";

const app: Express = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", async (req: Request, res: Response) => {
    await sendMail(
        "vobiy29402@datingel.com",
        "Welcome to Clash",
        generateWelcomeEmail("Abhra")
    );
    res.send("Email sent!");
});

app.listen(port, () => {
    console.log(`Server is running at PORT ${port}`);
});
