import express, { Express, Request, Response } from "express"

const app: Express = express();
const port: number = 3001;

app.get("/", (req: Request, res: Response): void => {
    res.send("Express + TypeScript Server");
});

app.listen(port, (): void => {
    console.log("[server]: Server is running at http://localhost:${port}");
});