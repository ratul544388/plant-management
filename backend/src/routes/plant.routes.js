import express from 'express';
import {
  createPlant,
  deletePlant,
  getAllPlants,
  getPlantById,
  getPlantsByUserEmail,
  updatePlant,
  uploadImage
} from '../controllers/plant.controller.js';

const router = express.Router();

router.get('/', getAllPlants);

router.get('/:id', getPlantById);

router.get('/user/:email', getPlantsByUserEmail);

router.post('/', createPlant);

router.post('/upload-image', uploadImage);

router.put('/:id', updatePlant);

router.delete('/:id', deletePlant);

export default router;
