import express from 'express';
import {
  createPlant,
  deletePlant,
  getPlantBySlug,
  getPlants,
  getPlantsByUserEmail,
  updatePlant
} from '../controllers/plant.controller.js';

const router = express.Router();

router.get('/', getPlants);

router.get('/:slug', getPlantBySlug);

router.get('/user/:email', getPlantsByUserEmail);

router.post('/', createPlant);

router.put('/:id', updatePlant);

router.delete('/:id', deletePlant);

export default router;
