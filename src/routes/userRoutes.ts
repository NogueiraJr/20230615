import { FastifyInstance, RouteOptions } from 'fastify';
import { getUsersHandler, getUserHandler, createUserHandler, updateUserHandler, deleteUserHandler } from '../controllers/userController';

const userRoutes = (router: FastifyInstance) => {
  router.get('/user', getUsersHandler);
  router.get('/user/:id', getUserHandler);
  router.post('/user', createUserHandler);
  router.patch('/user/:id', updateUserHandler);
  router.delete('/user/:id', deleteUserHandler);
};

export default userRoutes;
