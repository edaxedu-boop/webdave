import { MongoClient } from 'mongodb';
import bcrypt from 'bcryptjs';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const DB_NAME = 'mundodigital';
export const CONTENT_ID = 'social_works';
export const defaultContent = JSON.parse(
  readFileSync(join(__dirname, 'defaultContent.json'), 'utf-8')
);

const globalCache = globalThis;

let client;
let db;

export async function connectDb() {
  if (db) return db;

  if (globalCache._mongoDb) {
    db = globalCache._mongoDb;
    client = globalCache._mongoClient;
    return db;
  }

  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error('Falta MONGODB_URI en las variables de entorno.');
  }

  client = new MongoClient(uri, { serverSelectionTimeoutMS: 15000 });
  await client.connect();
  db = client.db(DB_NAME);

  globalCache._mongoDb = db;
  globalCache._mongoClient = client;

  return db;
}

export function getDb() {
  if (!db) {
    throw new Error('MongoDB no está conectado.');
  }
  return db;
}

export async function seedDatabase() {
  await connectDb();
  const database = getDb();
  const admins = database.collection('admins');
  const socialWorks = database.collection('social_works');

  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if ((await admins.countDocuments()) === 0) {
    if (!adminEmail || !adminPassword) {
      throw new Error('Define ADMIN_EMAIL y ADMIN_PASSWORD para crear el admin inicial.');
    }
    await admins.insertOne({
      email: adminEmail.toLowerCase(),
      passwordHash: await bcrypt.hash(adminPassword, 10),
      createdAt: new Date(),
    });
  }

  if (!(await socialWorks.findOne({ _id: CONTENT_ID }))) {
    await socialWorks.insertOne({
      _id: CONTENT_ID,
      content: defaultContent,
      updatedAt: new Date(),
    });
  }
}

export async function findAdminByEmail(email) {
  return getDb().collection('admins').findOne({ email: email.toLowerCase() });
}

export async function getSocialWorksContent() {
  const doc = await getDb().collection('social_works').findOne({ _id: CONTENT_ID });
  return doc?.content ?? defaultContent;
}

export async function saveSocialWorksContent(content) {
  await getDb().collection('social_works').updateOne(
    { _id: CONTENT_ID },
    { $set: { content, updatedAt: new Date() } },
    { upsert: true }
  );
}

export async function closeDb() {
  if (client) {
    await client.close();
    client = undefined;
    db = undefined;
    globalCache._mongoDb = undefined;
    globalCache._mongoClient = undefined;
  }
}
