import { Job, Queue, Worker } from "bullmq";
import { defaultQueueOptions, redisConnection } from "../config/queue";
import { sendMail } from "../config/mail";

export const emailQueueName = "emailQueue";

interface QueueJobDataType {
    toEmail: string;
    subject: string;
    body: string;
}

export const emailQueue = new Queue(emailQueueName, {
    connection: redisConnection,
    defaultJobOptions: defaultQueueOptions,
});

// * Worker
export const queueWorker = new Worker(
    emailQueueName,
    async (job: Job) => {
        const data: QueueJobDataType = job.data;
        await sendMail(data.toEmail, data.subject, data.body);
    },
    {
        connection: redisConnection,
    }
);
