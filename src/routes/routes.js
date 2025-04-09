import express from 'express';
import passport from 'passport';
import { getLoginPage, getSignupPage, getFoldersPage, postSignup } from '../controllers/routeController.js';
import validateSignup from '../middleware/validateSignup.js';
import validateUserLogin from '../middleware/validateUserLogin.js';


const router = express.Router();

router.get('/', getLoginPage);
router.get('/sign-up', getSignupPage);
router.get('/folders', getFoldersPage);

router.post('/sign-up', validateSignup, postSignup);
router.post('/', validateUserLogin, passport.authenticate('local', {
    successRedirect: '/folders',
    failureRedirect: '/'
}));

export default router;