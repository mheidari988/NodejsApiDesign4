export default {
    env: process.env.NODE_ENV,
    port: process.env.PORT,
    secrets: {
        jwt: process.env.JWT_SECRET,
        dbUrl: process.env.DATABASE_URL
    }
};
