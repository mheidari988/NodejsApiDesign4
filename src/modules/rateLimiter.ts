import rateLimit from 'express-rate-limit';

export const Level1Limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15min
    max: 10,
    message: "Too many requests, please try again later"
});

export const Level2Limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15min
    max: 20,
    message: "Too many requests, please try again later"
});

export const Level3Limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15min
    max: 30,
    message: "Too many requests, please try again later"
});