import jwt from 'jsonwebtoken';
require('dotenv').config();

const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET || 'sua_chave_secreta_padrão';


function generateAccessToken(user: any) {
    if (!process.env.ACCESS_TOKEN_SECRET) {
        throw new Error('ACCESS_TOKEN_SECRET não está definido nas variáveis de ambiente');
    }
      
    const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
}

function authenticateToken(req: any, res: any, next: any) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.sendStatus(401);

  if (!process.env.ACCESS_TOKEN_SECRET) {
    throw new Error('ACCESS_TOKEN_SECRET não está definido nas variáveis de ambiente');
  }
  
  const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err: any, user: any) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

export { generateAccessToken, authenticateToken };
