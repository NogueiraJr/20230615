import { FastifyInstance, RouteOptions } from 'fastify';
import { getUserLoginHandler } from '../controllers/loginController';
import { getUsersHandler, getUserHandler, createUserHandler, updateUserHandler, deleteUserHandler, getUserCollectionHandler, getUserSystemMenuModuleHandler } from '../controllers/userController';
import { createUserEmailHandler, updateUserEmailHandler, deleteUserEmailHandler } from '../controllers/userEmailController';
import { createUserPhoneHandler, updateUserPhoneHandler, deleteUserPhoneHandler } from '../controllers/userPhoneController';

const userRoutes = (router: FastifyInstance) => {
  router.post('/login', getUserLoginHandler);

  router.get('/user', getUsersHandler);
  router.get('/user/:id', getUserHandler);
  
  router.get('/user/collection/:id', getUserCollectionHandler);
  router.get('/user/system-menu-module/:id', getUserSystemMenuModuleHandler);
  
  router.post('/user', createUserHandler);
  router.patch('/user/:id', updateUserHandler);
  router.delete('/user/:id', deleteUserHandler);

  router.post('/user/email', createUserEmailHandler);
  router.patch('/user/email/:emailId', updateUserEmailHandler);
  router.delete('/user/email/:id', deleteUserEmailHandler);

  router.post('/user/phone', createUserPhoneHandler);
  router.patch('/user/phone/:phoneId', updateUserPhoneHandler);
  router.delete('/user/phone/:id', deleteUserPhoneHandler);

};

export default userRoutes;
