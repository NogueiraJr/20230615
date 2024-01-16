import { _getUsers } from '../../repository/user/getUsers';

export async function getUsers() {
  try {
    return await _getUsers();
  } catch (error) {
    throw error;
  } finally {
  }
}
