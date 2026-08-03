import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import { connectDb, closeDb, getDb } from './db.js';

dotenv.config();

async function resetAdmin() {
  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminEmail || !adminPassword) {
    throw new Error('Define ADMIN_EMAIL y ADMIN_PASSWORD en .env');
  }

  await connectDb();
  const admins = getDb().collection('admins');
  const email = adminEmail.trim().toLowerCase();

  await admins.deleteMany({});
  await admins.insertOne({
    email,
    passwordHash: await bcrypt.hash(adminPassword, 10),
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  console.log('Admin recreado en MongoDB.');
  console.log(`Correo: ${email}`);
  console.log('Contraseña: la definida en ADMIN_PASSWORD del .env');

  await closeDb();
}

resetAdmin().catch((error) => {
  console.error('Error:', error.message);
  process.exit(1);
});
