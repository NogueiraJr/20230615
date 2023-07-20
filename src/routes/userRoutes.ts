import { FastifyInstance, RouteOptions } from 'fastify';
import { createUserHandler, getUsersHandler, updateUserHandler, deleteUserHandler } from '../controllers/userController';

const userRoutes = (router: FastifyInstance) => {
  router.get('/users', getUsersHandler);
  router.post('/users', createUserHandler);
  router.patch('/users/:id', updateUserHandler);
  router.delete('/users/:id', deleteUserHandler);
};

export default userRoutes;
