import jwt from 'jsonwebtoken';

export function signToken(payload) {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error('Falta JWT_SECRET en las variables de entorno.');
  }
  return jwt.sign(payload, secret, { expiresIn: '7d' });
}

export function verifyToken(token) {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error('Falta JWT_SECRET en las variables de entorno.');
  }
  return jwt.verify(token, secret);
}

export function authMiddleware(req, res, next) {
  const header = req.headers.authorization;
  if (!header?.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'No autorizado.' });
  }

  try {
    const token = header.slice(7);
    req.admin = verifyToken(token);
    next();
  } catch {
    return res.status(401).json({ error: 'Sesión inválida o expirada.' });
  }
}
