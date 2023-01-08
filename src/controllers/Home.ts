import { NextFunction, Request, Response } from "express"

export default class HomeController {
    public static async index(req: Request, res: Response, next: NextFunction) {
        try {
            res.status(200).json({ message: "Hello World!" })
        } catch (error) {
            next(error)
        }
    }
}