
import { FastifyRequest } from 'fastify';
import { _createUser } from "../../repository/user/createUser";

export async function createUser(request: FastifyRequest) {
  try {
    const user = await _createUser(request);
    const userSummary = {
      id: user?.id,
      usr: user?.usr,
      name: user?.name,
      userTypeId: user?.userTypeId,
      createAt: user?.createAt,
    };

    return userSummary;

  } catch (error) {
    throw error;
  } finally {
  }
  

}
