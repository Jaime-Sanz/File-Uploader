import expressAsyncHandler from "express-async-handler";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

export const getLoginPage =  (req, res) => {
    res.render('login')
}