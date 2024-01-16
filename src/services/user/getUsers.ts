import { _getUsers } from '../../repository/user/getUsers';

export async function getUsers() {
  try {
    const users = await _getUsers();
    const userSummary = users.map((user) => ({
      name: user.name,
      userType: {
        name: user.userType.name,
        description: user.userType.description,
      },
      active: user.active,
      emails: user.emails.map((email) => ({
        email: email.email,
        type: email.userEmailTypeId,
      })),
      phones: user.phones.map((phone) => ({
        phone: phone.phone,
        type: phone.userPhoneTypeId,
      })),
    }));
    return userSummary;
  } catch (error) {
    throw error;
  } finally {
  }
}
