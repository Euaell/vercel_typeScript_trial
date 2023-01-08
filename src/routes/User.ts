import { Router } from 'express'
import controllers from '../controllers'

const { UserController } = controllers

const router = Router()

router.get('/', UserController.getUsers)

export default router