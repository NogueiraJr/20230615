import { prisma } from '../_prismaClient';
import { UserPayload } from '../interface/UserPayload';
import { createUserEmail } from './createUserEmail';
import { createUserPhone } from './createUserPhone';

import { FastifyRequest } from 'fastify';

export async function _createUser(request: FastifyRequest, _psw: string) {
  const { userTypeId, name, usr, emails, phones } = request.body as UserPayload;
  try {
    let user = await prisma.users.create({
      data: {
        userTypeId,
        name,
        usr,
        psw: _psw,
      },
    });

    if (emails != undefined) for (const email of emails) {
      await createUserEmail(email, user);
    }

    if (phones != undefined) for (const phone of phones) {
      await createUserPhone(phone, user);
    }
    
    return user;

  } catch (error) {
    throw error;
  } finally {
    await prisma.$disconnect();
  }
  
}
