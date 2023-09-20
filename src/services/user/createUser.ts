import { prisma } from '../../controllers/userController';

export async function createUser(userTypeId: string, name: string, emailData: any[], phoneData: any[]) {
  let user;
  
  try {
    user = await prisma.users.create({
      data: {
        userTypeId,
        name,
      },
    });

    if (emailData != undefined) for (const email of emailData) {
      await prisma.userEmails.create({
        data: {
          email: email.email,
          userId: user.id,  
          userEmailTypeId: email.userEmailTypeId,
          active: email.active,
          createAt: email.createAt,
        },
      });
    }

    if (phoneData != undefined) for (const phone of phoneData) {
      await prisma.userPhones.create({
        data: {
          phone: phone.phone,
          userId: user.id,  
          userPhoneTypeId: phone.userPhoneTypeId,
          active: phone.active,
          createAt: phone.createAt,
        },
      });
    }

  } catch (error) {
    throw error;
  } finally {
    await prisma.$disconnect();
  }
  
  return user;
}