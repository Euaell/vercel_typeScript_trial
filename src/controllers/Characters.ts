import { NextFunction, Request, Response } from "express"
import models from "../models"

const { Characters } = models

export default class CharactersController {
    public static async getCharacters(req: Request, res: Response, next: NextFunction) {
        try {
            const characters = await Characters.find()

            return res.status(200).json({
                success: true,
                message: "Characters fetched successfully!",
                characters
            })
        } catch (error) {
            next(error)
        }
    }

    public static async getCharacter(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params

            const character = await Characters.findById(id)

            if (!character) {
                return res.status(404).json({
                    success: false,
                    message: "Character not found!"
                })
            }

            return res.status(200).json({
                success: true,
                message: "Character fetched successfully!",
                character
            })
        } catch (error) {
            next(error)
        }
    }

    public static async createCharacter(req: Request, res: Response, next: NextFunction) {
        try {
            const { actualName, characterName, description, image } = req.body

            if (!actualName || !characterName || !description || !image) {
                return res.status(400).json({
                    success: false,
                    message: "Please provide all required fields!"
                })
            }

            const character = await Characters.create({
                actualName,
                characterName,
                description,
                image
            })

            return res.status(201).json({
                success: true,
                message: "Character created successfully!",
                character
            })
        } catch (error) {
            next(error)
        }
    }

    public static async updateCharacter(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params
            const { actualName, characterName, description, image } = req.body

            if (!actualName || !characterName || !description || !image) {
                return res.status(400).json({
                    success: false,
                    message: "Please provide all required fields!"
                })
            }

            const character = await Characters.findByIdAndUpdate(id, {
                actualName,
                characterName,
                description,
                image
            }, { new: true })

            if (!character) {
                return res.status(404).json({
                    success: false,
                    message: "Character not found!"
                })
            }

            return res.status(200).json({
                success: true,
                message: "Character updated successfully!",
                character
            })
        } catch (error) {
            next(error)
        }
    }

    public static async deleteCharacter(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params

            const character = await Characters.findByIdAndDelete(id)

            if (!character) {
                return res.status(404).json({
                    success: false,
                    message: "Character not found!"
                })
            }

            return res.status(200).json({
                success: true,
                message: "Character deleted successfully!"
            })
        } catch (error) {
            next(error)
        }
    }
}