import express from 'express';
import passport from 'passport';
import { getLoginPage, getSignupPage, getDashboardPage, postSignup, postFolder } from '../controllers/routeController.js';
import validateSignup from '../middleware/validateSignup.js';
import validateUserLogin from '../middleware/validateUserLogin.js';


const router = express.Router();

router.get('/', getLoginPage);
router.get('/sign-up', getSignupPage);
router.get('/dashboard', getDashboardPage);

router.post('/sign-up', validateSignup, postSignup);
router.post('/', validateUserLogin, passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/'
}));
router.post('/folders', postFolder);

export default router;