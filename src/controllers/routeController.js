import expressAsyncHandler from "express-async-handler";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export const getLoginPage =  (req, res) => {
    res.render('login')
}

export const getSignupPage = (req, res) => {
    res.render('sign-up');
}

export const postSignup = asyncHandler(async (req, res) => {
    
})