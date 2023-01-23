import server from './server';
import dotenv from 'dotenv';

dotenv.config();

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});