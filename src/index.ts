import server from './server';
import dotenv from 'dotenv';
import config from './config/index';

dotenv.config();

server.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}`);
});