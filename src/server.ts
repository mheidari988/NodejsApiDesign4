import express from "express";
import morgan from 'morgan';
import cors from 'cors';
import router from './router';
import { protect } from "./modules/auth";
import { Level1Limiter, Level3Limiter } from "./modules/rateLimiter";
import { createNewUser, signIn } from "./handlers/user";

const app = express();

app.use(Level3Limiter);
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  console.log("Hello from Express!");
  res.status(200).json({ message: "Hey there..." });
});
app.post('/signup', createNewUser);
app.post('/signin', signIn);

app.use('/api', protect, router);

export default app;
