import prisma from "../modules/db";
import { comparePassword, createJWT, hashPassword } from "../modules/auth";

export const createNewUser = async (req, res, next) => {
    try {
        const alreadyExistedUser = await getUserByUserName(req.body.username);

        if (alreadyExistedUser) {
            res.status(400);
            res.json({
                message: 'username is taken'
            });
            return;
        }
    } catch (e) {
        e.type = 'input';
        console.log(e);
        next(e);
    }

    try {
        const user = await prisma.user.create({
            data: {
                username: req.body.username,
                password: await hashPassword(req.body.password)
            }
        });

        const token = createJWT(user);
        res.json({ token });
    } catch (e) {
        e.type = 'input';
        console.log(e);
        next(e);
    }
}

export const signIn = async (req, res) => {
    const user = await getUserByUserName(req.body.username);

    if (!user) {
        res.status(400);
        res.json({
            message: 'invalid username or password'
        });
        return;
    }

    const isValid = comparePassword(req.body.password, user.password);

    if (!isValid) {
        res.status(400);
        res.json({
            message: 'invalid username or password'
        });
        return;
    }

    const token = createJWT(user);
    res.json({ token });
}

const getUserByUserName = async (username) => {
    const user = await prisma.user.findUnique({
        where: {
            username: username
        }
    });

    return user;
}