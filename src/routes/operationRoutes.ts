import { FastifyInstance, RouteOptions } from 'fastify';
import { createOperationHandler } from '../controllers/operationController';

const operationRoutes = (router: FastifyInstance) => {
  router.post('/operation', createOperationHandler);
};

export default operationRoutes;
