import { FastifyInstance, RouteOptions } from 'fastify';
import { createOperationHandler, getOperationHandler } from '../controllers/operationController';

const operationRoutes = (router: FastifyInstance) => {
  router.post('/operation', createOperationHandler);
  router.post('/getOperation', getOperationHandler);
};

export default operationRoutes;
