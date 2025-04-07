import express from 'express';
import passport from 'passport';
import { getLoginPage } from '../controllers/routeController.js';

const router = express.Router();

router.get('/', getLoginPage);

export default router;