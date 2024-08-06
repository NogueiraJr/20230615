import { FastifyInstance, RouteOptions } from 'fastify';
import { createActionHandler } from '../controllers/actionController';

const actionRoutes = (router: FastifyInstance) => {
  router.post('/action', createActionHandler);
};

export default actionRoutes;
