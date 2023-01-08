import { NextFunction, Request, Response } from "express"
import models from "../models"

const { Episodes } = models

export default class EpisodesController {
    public static async getEpisodes(req: Request, res: Response, next: NextFunction) {
        try {
            const episodes = await Episodes.find()

            return res.status(200).json({
                success: true,
                message: "Episodes fetched successfully!",
                episodes
            })
        } catch (error) {
            next(error)
        }
    }

    public static async getEpisode(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params

            const episode = await Episodes.findById(id)

            if (!episode) {
                return res.status(404).json({
                    success: false,
                    message: "Episode not found!"
                })
            }

            return res.status(200).json({
                success: true,
                message: "Episode fetched successfully!",
                episode
            })
        } catch (error) {
            next(error)
        }
    }

    public static async createEpisode(req: Request, res: Response, next: NextFunction) {
        try {
            const { title, description, image } = req.body

            if (!title || !description || !image) {
                return res.status(400).json({
                    success: false,
                    message: "Please provide all required fields!"
                })
            }

            const episode = await Episodes.create({
                title,
                description,
                image
            })

            return res.status(201).json({
                success: true,
                message: "Episode created successfully!",
                episode
            })
        } catch (error) {
            next(error)
        }
    }

    public static async updateEpisode(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params
            const { title, description, image } = req.body

            const episode = await Episodes.findByIdAndUpdate(id, {
                title,
                description,
                image,
                
            }, { new: true })

            if (!episode) {
                return res.status(404).json({
                    success: false,
                    message: "Episode not found!"
                })
            }

            return res.status(200).json({
                success: true,
                message: "Episode updated successfully!",
                episode
            })
        } catch (error) {
            next(error)
        }
    }

    public static async deleteEpisode(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params

            const episode = await Episodes.findByIdAndDelete(id)

            if (!episode) {
                return res.status(404).json({
                    success: false,
                    message: "Episode not found!"
                })
            }

            return res.status(200).json({
                success: true,
                message: "Episode deleted successfully!"
            })
        } catch (error) {
            next(error)
        }
    }
}