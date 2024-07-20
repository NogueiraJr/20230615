import { _getUsers } from '../../repository/user/getUsers';

export async function getUsers() {
  try {
    const users = await _getUsers();
    const userSummary = users.map((user) => ({
      id: user.id,
      name: user.name,
      usr: user.usr,
      userType: {
        name: user.userType.name,
        description: user.userType.description,
      },
      active: user.active,
    }));
    return userSummary;
  } catch (error) {
    throw error;
  } finally {
  }
}
