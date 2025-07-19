import jwt from 'jsonwebtoken';

export function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']; // Bearer <token>
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.status(401).json({ msg: "Access Denied: No Token" });

  jwt.verify(token, 'secret_key', (err, user) => {
    if (err) return res.status(403).json({ msg: "Invalid Token" });

    req.user = user; // attach user data to request
    next();
  });
}
