import { PrismaClient } from "@prisma/client";
import { Strategy as LocalStrategy } from "passport-local";
import passport from "passport";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export function configurePassport(passport) {
    passport.use(
        new LocalStrategy(async (username, password, done) => {
            try {
                const user = await prisma.user.findUnique({
                    where: { username },
                });

                if (!user) {
                    return done(null, false, {message: 'User not found'});
                }

                const isMatch = await bcrypt.compare(password, user.password);
                if (!isMatch) {
                    return done(null, false, {message: 'Incorrect password'});
                }
                
                return done(null, user);
            } catch (error) {
                return done(error);
            }
        })
    )
}

passport.serializeUser((user, done) => done(null, user.id));

passport.deserializeUser(async (id, done) => {
    try {
        const user = await prisma.user.findUnique({ where: { id }});
        done(null, user);
    } catch (error) {
        done(error);
    }
})