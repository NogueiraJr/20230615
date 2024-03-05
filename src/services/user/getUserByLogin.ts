import { FastifyRequest } from "fastify";
import { _getUser } from "../../repository/user/getUser";
import { _getUserByLogin } from "../../repository/user/getUserByLogin";

export async function getUserByLogin(request: FastifyRequest) {
  try {
    const user = await _getUserByLogin(request);
    const userSummary = {
      id: user?.id,
      usr: user?.usr,
      psw: user?.psw,
    };

    return userSummary;
  } catch (error) {
    throw error;
  } finally {
  }
}
