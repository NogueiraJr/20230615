import { FastifyInstance, RouteOptions } from 'fastify';
import { createActionProductHandler } from '../controllers/actionItemController';

const actionProductRoutes = (router: FastifyInstance) => {
  router.post('/actionProduct', createActionProductHandler);
};

export default actionProductRoutes;
