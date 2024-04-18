import { Request, Response } from "express";

export class ProcessoController {
    static async getProcessos(req: Request, res: Response) {
        res.send("Hello World");
    }
}