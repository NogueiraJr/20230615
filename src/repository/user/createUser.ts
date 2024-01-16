import { prisma } from '../../controllers/userController';
import { createUserEmail } from './createUserEmail';
import { createUserPhone } from './createUserPhone';

export async function createUser(userTypeId: string, name: string, usr: string, psw: string, emailData: any[], phoneData: any[]) {
  let user;
  
  try {
    user = await prisma.users.create({
      data: {
        userTypeId,
        name,
        usr,
        psw,
      },
    });

    if (emailData != undefined) for (const email of emailData) {
      await createUserEmail(email, user);
    }

    if (phoneData != undefined) for (const phone of phoneData) {
      await createUserPhone(phone, user);
    }

  } catch (error) {
    throw error;
  } finally {
    await prisma.$disconnect();
  }
  
  return user;
}
