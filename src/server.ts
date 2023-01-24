import express from "express";
import morgan from 'morgan';
import cors from 'cors';
import router from './router';
import { protect } from "./modules/auth";
import { Level3Limiter } from "./modules/rateLimiter";
import { createNewUser, signIn } from "./handlers/users-handler";

const app = express();

app.use(Level3Limiter);
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).json({ message: "Server is up." });
});
app.post('/signup', createNewUser);
app.post('/signin', signIn);

app.use('/api', protect, router);

app.use((err, req, res, next) => {
  if (err.type === 'auth') {
    res.status(401).json({
      message: 'unauthorized'
    });
  } else if (err.type === 'input') {
    res.status(400).json({
      message: 'invalid input'
    });
  } else {
    res.status(500).json({
      message: 'server down'
    });
  }
})

export default app;
