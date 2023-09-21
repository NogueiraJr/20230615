import { FastifyInstance, RouteOptions } from 'fastify';
import { getUsersHandler, getUserHandler, createUserHandler, updateUserHandler, deleteUserHandler } from '../controllers/userController';
import { createUserEmailHandler, updateUserEmailHandler, deleteUserEmailHandler } from '../controllers/userEmailController';
import { createUserPhoneHandler, updateUserPhoneHandler, deleteUserPhoneHandler } from '../controllers/userPhoneController';

const userRoutes = (router: FastifyInstance) => {
  router.get('/user', getUsersHandler);
  router.get('/user/:id', getUserHandler);
  router.post('/user', createUserHandler);
  router.patch('/user/:id', updateUserHandler);
  router.delete('/user/:id', deleteUserHandler);

  router.post('/user/email', createUserEmailHandler);
  router.patch('/user/email/:emailId', updateUserEmailHandler);
  router.delete('/user/email/:emailId', deleteUserEmailHandler);

  router.post('/user/phone', createUserPhoneHandler);
  router.patch('/user/phone/:phoneId', updateUserPhoneHandler);
  router.delete('/user/phone/:phoneId', deleteUserPhoneHandler);
};

export default userRoutes;
