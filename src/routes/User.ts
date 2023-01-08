import { Router } from 'express'
import controllers from '../controllers'

const { UserController } = controllers

const router = Router()

router.get('/', UserController.getUsers)
router.post('/register', UserController.register)
router.get('/:id', UserController.getUser)
router.put('/:id', UserController.updateUser)
router.delete('/:id', UserController.deleteUser)

export default router