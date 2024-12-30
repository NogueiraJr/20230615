import { FastifyInstance, RouteOptions } from 'fastify';
import { createProductHandler } from '../controllers/itemController';
import { getProductHandler } from '../controllers/itemController';

const productRoutes = (router: FastifyInstance) => {
  router.post('/createProduct', createProductHandler);
  router.post('/getProduct', getProductHandler);
};

export default productRoutes;
