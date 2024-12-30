import { FastifyInstance, RouteOptions } from 'fastify';
import { createActionItemHandler } from '../controllers/actionItemController';

const actionItemRoutes = (router: FastifyInstance) => {
  router.post('/actionItem', createActionItemHandler);
};

export default actionItemRoutes;
