import { prisma } from '../_prismaClient';
import { UserPayload } from '../interface/UserPayload';
import { createUserEmail } from './createUserEmail';
import { createUserPhone } from './createUserPhone';

import { FastifyRequest } from 'fastify';
const bcrypt = require('bcryptjs');

export async function _createUser(request: FastifyRequest) {
  let user;
  const { userTypeId, name, usr, psw, emails, phones } = request.body as UserPayload;
  
  const _psw = await bcrypt.hash(psw, 10);
    
  try {
    user = await prisma.users.create({
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

  } catch (error) {
    throw error;
  } finally {
    await prisma.$disconnect();
  }
  
  return user;
}
