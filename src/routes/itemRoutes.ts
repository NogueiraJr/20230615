import { FastifyInstance, RouteOptions } from 'fastify';
import { createItemHandler } from '../controllers/itemController';
import { getItemHandler } from '../controllers/itemController';

const itemRoutes = (router: FastifyInstance) => {
  router.post('/createItem', createItemHandler);
  router.post('/getItem', getItemHandler);
};

export default itemRoutes;
