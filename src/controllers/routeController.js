import asyncHandler from "express-async-handler";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export const getLoginPage =  (req, res) => {
    res.render('login')
}

export const getSignupPage = (req, res) => {
    res.render('sign-up');
}

export const getDashboardPage = (req, res) => {
    res.render('dashboard');
}

export const postSignup = asyncHandler(async (req, res) => {
    const { username, password } = req.body;

    //error checking to be rewritten to reflect on ejs page
    if (!username || !password) {
        return res.status(400).send('Username and password are required');
    }


    const existingUser = await prisma.user.findUnique({
        where: { username },
    });

    if (existingUser) {
        return res.status(400).send('Username already taken');
    }
    //end of error checking that needs to be rewritten later

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
        data: {
            username,
            password: hashedPassword,
        },
    });

    res.redirect('/');
});

export const postFolder = asyncHandler(async (req, res) => {
    
});