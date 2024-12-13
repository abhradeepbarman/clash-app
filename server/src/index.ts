import express, { Express, Request, Response } from "express";
import "dotenv/config";
import { sendMail } from "./config/mail";
import { generateWelcomeEmail } from "./mailTemplates/welcomeEmailBody";
import "./jobs/index";
import { emailQueue, emailQueueName } from "./jobs/EmailJob";

const app: Express = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", async (req: Request, res: Response) => {
    await emailQueue.add(emailQueueName, {
        toEmail: "abhra@gmail.com",
        subject: "Hey There",
        body: generateWelcomeEmail("Abhra"),
    });
    res.send("Email sent!");
});

app.listen(port, () => {
    console.log(`Server is running at PORT ${port}`);
});
