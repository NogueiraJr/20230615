import fastify from 'fastify';
import userRoutes from './routes/userRoutes';
import itemRoutes from './routes/itemRoutes';
import clientRoutes from './routes/clientRoutes';
import operationRoutes from './routes/operationRoutes';
import actionRoutes from './routes/actionRoutes';
import actionItemRoutes from './routes/actionItemRoutes';

const app = fastify();

// Register routes
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
