import express from 'express';
import passport from 'passport';
import { getLoginPage, getSignupPage, postSignup } from '../controllers/routeController.js';

const router = express.Router();

router.get('/', getLoginPage);
router.get('/sign-up', getSignupPage);

router.post('/sign-up', postSignup);

export default router;