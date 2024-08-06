import fastify from 'fastify';
import userRoutes from './routes/userRoutes';
import productRoutes from './routes/productRoutes';
import clientRoutes from './routes/clientRoutes';
import operationRoutes from './routes/operationRoutes';
import actionRoutes from './routes/actionRoutes';
import actionProductRoutes from './routes/actionProductRoutes';

const app = fastify();

// Register routes
userRoutes(app);
productRoutes(app);
clientRoutes(app);
operationRoutes(app);
actionRoutes(app);
actionProductRoutes(app);

app.listen({
  host: '0.0.0.0',
  port: process.env.PORT ? Number(process.env.PORT) : 3333,
}).then(() => {
  console.log('HTTP Server Running');
});
