import { FastifyInstance, RouteOptions } from 'fastify';
import { getClientHandler } from '../controllers/clientController';

const clientRoutes = (router: FastifyInstance) => {
  router.post('/getClient', getClientHandler);

};

export default clientRoutes;
