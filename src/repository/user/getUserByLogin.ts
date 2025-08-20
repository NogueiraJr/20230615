import { FastifyRequest } from 'fastify';
import { prisma } from '../_prismaClient';
import { UserPayload } from '../interface/UserPayload';

export async function _getUserByLogin(request: FastifyRequest) {
  try {
    const { usr } = request.body as UserPayload;
    return await prisma.users.findFirst({
      where: { usr },
      include: {
        userType: {
          select: {
            id: true
          }
        },
        userSystemMenuModule: {
          select: {
            systemMenuModule: {
              select: {
                system: {
                  select: {
                    id: true
                  }
                }
              }
            }
          }
        }
      }
    });
  } catch (error) {
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}
