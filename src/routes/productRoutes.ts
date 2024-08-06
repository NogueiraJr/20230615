import { FastifyInstance, RouteOptions } from 'fastify';
import { createProductHandler } from '../controllers/productController';
import { getProductHandler } from '../controllers/productController';

const productRoutes = (router: FastifyInstance) => {
  router.post('/createProduct', createProductHandler);
  router.post('/getProduct', getProductHandler);
};

export default productRoutes;
