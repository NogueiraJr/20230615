import { FastifyInstance, RouteOptions } from 'fastify';
import { createActionProductHandler } from '../controllers/actionProductController';

const actionProductRoutes = (router: FastifyInstance) => {
  router.post('/actionProduct', createActionProductHandler);
};

export default actionProductRoutes;
