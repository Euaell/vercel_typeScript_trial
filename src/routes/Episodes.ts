import { Router } from 'express'
import controllers from '../controllers'

const { EpisodesController } = controllers

const router = Router()

router.get('/', EpisodesController.getEpisodes)
router.get('/:id', EpisodesController.getEpisode)
router.post('/', EpisodesController.createEpisode)
router.put('/:id', EpisodesController.updateEpisode)
router.delete('/:id', EpisodesController.deleteEpisode)

export default router
