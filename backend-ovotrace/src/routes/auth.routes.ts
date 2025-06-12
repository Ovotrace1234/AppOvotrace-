import express from 'express';
import { registerClient, registerFarm } from '../controllers/auth.controller';

const router = express.Router();

router.post('/register-client', registerClient);
router.post('/register-farm', registerFarm);

export default router;
