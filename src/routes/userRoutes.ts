import { FastifyInstance, RouteOptions } from 'fastify';
import { getUsersHandler, getUserHandler, createUserHandler, updateUserHandler, deleteUserHandler } from '../controllers/userController';

const userRoutes = (router: FastifyInstance) => {
  router.get('/users', getUsersHandler);
  router.get('/users/:id', getUserHandler);
  router.post('/users', createUserHandler);
  router.patch('/users/:id', updateUserHandler);
  router.delete('/users/:id', deleteUserHandler);
};

export default userRoutes;
