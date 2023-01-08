import controller from '../controllers';
import { Router } from 'express';

const { HomeController } = controller;

const router = Router();

router.get('/', HomeController.index);

export default router;