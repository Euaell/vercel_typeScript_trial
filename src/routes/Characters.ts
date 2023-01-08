import { Router } from 'express'

import controllers from '../controllers'

const { CharactersController } = controllers

const router = Router()

router.get('/', CharactersController.getCharacters)
router.get('/:id', CharactersController.getCharacter)
router.post('/', CharactersController.createCharacter)
router.put('/:id', CharactersController.updateCharacter)
router.delete('/:id', CharactersController.deleteCharacter)

export default router
