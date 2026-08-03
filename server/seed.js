import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import {
  connectDb,
  closeDb,
  getDb,
  CONTENT_ID,
  defaultContent,
  DB_NAME,
} from './db.js';

dotenv.config();

async function seed() {
  await connectDb();
  const db = getDb();

  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminEmail || !adminPassword) {
    throw new Error('Define ADMIN_EMAIL y ADMIN_PASSWORD en .env');
  }

  const admins = db.collection('admins');
  const email = adminEmail.toLowerCase();
  const passwordHash = await bcrypt.hash(adminPassword, 10);

  await admins.updateOne(
    { email },
    {
      $set: { email, passwordHash, updatedAt: new Date() },
      $setOnInsert: { createdAt: new Date() },
    },
    { upsert: true }
  );
  console.log(`Admin configurado: ${email}`);

  await db.collection('social_works').updateOne(
    { _id: CONTENT_ID },
    {
      $set: {
        content: defaultContent,
        updatedAt: new Date(),
      },
    },
    { upsert: true }
  );

  console.log(`Contenido de Obras Sociales subido a MongoDB (${DB_NAME}.social_works)`);
  console.log('Secciones disponibles para editar en /admin:');
  console.log('  - Hero, Estadísticas, Programas, Compromiso, Donaciones, Enlaces');

  await closeDb();
}

seed().catch((error) => {
  console.error('Error al subir datos:', error.message);
  process.exit(1);
});
