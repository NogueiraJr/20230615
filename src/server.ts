import fastify from 'fastify';
import userRoutes from './routes/userRoutes';

const app = fastify();

// Register routes
userRoutes(app);

app.listen({
  host: '0.0.0.0',
  port: process.env.PORT ? Number(process.env.PORT) : 3333,
}).then(() => {
  console.log('HTTP Server Running');
});
