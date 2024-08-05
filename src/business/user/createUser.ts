import { FastifyRequest } from 'fastify';
import { _createUser } from "../../repository/user/createUser";
import { UserPayload } from '../../repository/interface/UserPayload';

export async function createUser(request: FastifyRequest) {
  try {
    const bcrypt = require('bcryptjs');
    const { psw } = request.body as UserPayload;
    const _psw = await bcrypt.hash(psw, 10);

    const user = await _createUser(request, _psw);
    const userSummary = {
      id: user?.id,
      usr: user?.usr,
      name: user?.name,
      userTypeId: user?.userTypeId,
      userId: user?.userId,
    };

    return userSummary;

  } catch (error) {
    throw error;
  } finally {
  }
  

}
