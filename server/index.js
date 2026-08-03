import express from 'express';
import cors from 'cors';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import {
  connectDb,
  seedDatabase,
  findAdminByEmail,
  getSocialWorksContent,
  saveSocialWorksContent,
} from './db.js';
import { authMiddleware, signToken } from './auth.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ limit: '2mb' }));

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'mundodigital-api', storage: 'mongodb' });
});

app.get('/api/social-works', async (_req, res) => {
  try {
    const content = await getSocialWorksContent();
    res.json(content);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'No se pudo cargar el contenido.' });
  }
});

app.put('/api/social-works', authMiddleware, async (req, res) => {
  try {
    const content = req.body;
    if (!content || typeof content !== 'object') {
      return res.status(400).json({ error: 'Contenido inválido.' });
    }
    await saveSocialWorksContent(content);
    res.json({ ok: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'No se pudo guardar el contenido.' });
  }
});

app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: 'Correo y contraseña son obligatorios.' });
    }

    const admin = await findAdminByEmail(String(email).trim());
    if (!admin) {
      return res.status(401).json({ error: 'Correo o contraseña incorrectos.' });
    }

    const valid = await bcrypt.compare(password, admin.passwordHash);
    if (!valid) {
      return res.status(401).json({ error: 'Correo o contraseña incorrectos.' });
    }

    const token = signToken({ email: admin.email, sub: admin._id.toString() });
    res.json({ token, email: admin.email });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al iniciar sesión.' });
  }
});

app.get('/api/auth/me', authMiddleware, (req, res) => {
  res.json({ email: req.admin.email });
});

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
