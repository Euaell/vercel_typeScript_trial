import { NextFunction, Request, Response } from "express"

import User from "../models/User"


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

    public static async createUser(req: Request, res: Response, next: NextFunction) {
        try {
            const { name, email, password } = req.body
            const user = await User.create({ name, email, password })
            res.status(201).json({
                success: true,
                message: "User created successfully!",
                data: user
            })
        } catch (error) {
            next(error)
        }
    }
}

