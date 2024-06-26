import { _getUser } from "../../repository/user/getUser";

export async function getUser(id: string, reply: any) {
  try {
    const user = await _getUser(id);
    if (!user) return reply.status(404).send({ message: 'Usuário não encontrado' });
    const userSummary = {
      name: user?.name,
      usr: user?.usr,
      userType: {
        name: user?.userType.name,
        description: user?.userType.description,
      },
      active: user?.active,
      emails: user?.emails.map((email) => ({
        email: email.email,
        type: email.userEmailTypeId,
      })),
      phones: user?.phones.map((email) => ({
        phone: email.phone,
        type: email.userPhoneTypeId,
      })),
    };

    return userSummary;
  } catch (error) {
    throw error;
  } finally {
  }
}
