import { FastifyInstance, RouteOptions } from 'fastify';
import { getClientHandler, getUserClientIdHandler } from '../controllers/clientController';

const clientRoutes = (router: FastifyInstance) => {
  router.post('/getClient', getClientHandler);
  router.post('/getUserClientId', getUserClientIdHandler);

};

export default clientRoutes;
