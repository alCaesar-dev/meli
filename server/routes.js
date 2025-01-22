import {Router} from 'express';
import {getAllItems, getItem} from './integrations/MercadoLibre/controllers/itemsController.js';

const router = Router();

router.get('/api/items/:id', getItem);
router.get('/api/items', getAllItems);

export default router;
