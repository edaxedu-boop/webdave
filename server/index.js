import dotenv from 'dotenv';
import app from './app.js';
import { connectDb, seedDatabase } from './db.js';

dotenv.config();

const PORT = process.env.PORT || 3001;

async function start() {
  await connectDb();
  await seedDatabase();

  app.listen(PORT, () => {
    console.log(`API corriendo en http://localhost:${PORT} [MongoDB Atlas]`);
  });
}

start().catch((error) => {
  console.error('No se pudo iniciar el servidor:', error.message);
  console.error('Verificá Network Access en MongoDB Atlas (permitir tu IP o 0.0.0.0/0).');
  process.exit(1);
});
