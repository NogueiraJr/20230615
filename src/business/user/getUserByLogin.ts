import { FastifyReply, FastifyRequest } from "fastify";
import { UserPayload } from "../../repository/interface/UserPayload";
import { _getUserByLogin } from "../../repository/user/getUserByLogin";

export async function getUserByLogin(request: FastifyRequest, reply: FastifyReply) {
  try {
    const user = await _getUserByLogin(request);
    if (user?.id == undefined) return reply.status(400).send({ message: 'Usuário não encontrado' });
    
    const bcrypt = require('bcryptjs');
    const { psw } = request.body as UserPayload;
    const validPassword = await bcrypt.compare(psw, user.psw);
    if (!validPassword) return reply.status(400).send({ message: 'Credenciais inválidas' });

    const systemIds = [...new Set(user?.userSystemMenuModule?.map(module => module.systemMenuModule?.system?.id))];

    return {
      id: user?.id,
      usr: user?.usr,
      userTypeId: user?.userType?.id,
      systemIds: systemIds
    };

  } catch (error) {
    throw error;
  } finally {
  }
}
