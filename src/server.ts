import fastify from 'fastify';
import cors from '@fastify/cors';
import userRoutes from './routes/userRoutes';
import itemRoutes from './routes/itemRoutes';
import clientRoutes from './routes/clientRoutes';
import operationRoutes from './routes/operationRoutes';
import actionRoutes from './routes/actionRoutes';
import actionItemRoutes from './routes/actionItemRoutes';

const app = fastify();

// Configurar CORS
app.register(cors, {
  origin: 'http://localhost:3000', // Permitir requisições do frontend
  credentials: true, // Permitir cookies, autenticação, etc.
});

// Registrar rotas
userRoutes(app);
itemRoutes(app);
clientRoutes(app);
operationRoutes(app);
actionRoutes(app);
actionItemRoutes(app);

app.listen({
  host: '0.0.0.0',
  port: process.env.PORT ? Number(process.env.PORT) : 3333,
}).then(() => {
  console.log('HTTP Server Running');
});
