// controller
import { NextFunction, Request, Response } from "express"
import models from "../models"
import { IUser } from "../models/User"

const { User } = models

export default class UserController {
    
    public static async getUsers(req: Request, res: Response, next: NextFunction) {
        try {
            const users = await User.find()

            return res.status(200).json({
                success: true,
                message: "Users fetched successfully!",
                users
            })
        } catch (error) {
            next(error)
        }
    }

    public static async register(req: Request, res: Response, next: NextFunction) {
        try {
            const { name, email, password } = req.body

            if (!name || !email || !password) {
     
                return res.status(400).json({
                    success: false,
                    message: "Please provide all required fields!"
                })
            }

            const user = await User.create({
                name,
                email,
                password
            })

            return res.status(201).json({
                success: true,
                message: "User created successfully!",
                user
            })
        } catch (error) {
            next(error)
        }
    }

    public static async getUser(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params

            const user = await User.findById(id)

            if (!user) {
                return res.status(404).json({
                    success: false,
                    message: "User not found!"
                })
            }

            return res.status(200).json({
                success: true,
                message: "User fetched successfully!",
                user
            })
        } catch (error) {
            next(error)
        }
    }

    public static async updateUser(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params

            const newUserData: IUser = {
                ...req.body,
                updatedAt: new Date()
            }

            const user = await User.findByIdAndUpdate(id, newUserData, { new: true })

            if (!user) {
                return res.status(404).json({
                    success: false,
                    message: "User not found!"
                })
            }

            return res.status(200).json({
                success: true,
                message: "User updated successfully!",
                user
            })
        } catch (error) {
            next(error)
        }
    }

    public static async deleteUser(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params

            const user = await User.findByIdAndDelete(id)

            if (!user) {
                return res.status(404).json({
                    success: false,
                    message: "User not found!"
                })
            }

            return res.status(200).json({
                success: true,
                message: "User deleted successfully!",
                user
            })
        } catch (error) {
            next(error)
        }
    }
}
