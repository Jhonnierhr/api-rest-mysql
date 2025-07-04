import app from './app.js';
import { PORT } from './config.js';

app.listen(PORT);

console.log('el servidor esta corriendo en el puerto ', PORT);