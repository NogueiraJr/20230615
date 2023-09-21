import { prisma } from '../../controllers/userController';

export async function createUserPhone(phone: any, user: any) {
  try {
    return await prisma.userPhones.create({
      data: {
        phone: phone.phone,
        userId: user.id,
        userPhoneTypeId: phone.userPhoneTypeId,
        active: phone.active,
        createAt: phone.createAt,
      },
    });
  } catch (error) {
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}
