import { NextFunction, Request, Response } from "express"


export default class UserController {
    
    public static async getUsers(req: Request, res: Response, next: NextFunction) {
        try {
            res.status(200).json({
                success: true,
                message: "Users fetched successfully!"

            })
        } catch (error) {
            next(error)
        }
    }
}

