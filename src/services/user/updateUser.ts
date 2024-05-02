import { _updateUser } from '../../repository/user/updateUser';

export async function updateUser(id: string, userTypeId: string, name: string, usr: string, psw: string, reply: any) {
  try {
    let _user = await _updateUser(id, userTypeId, name, usr, psw);
    if (!_user) {
      reply.status(404).send({ error: 'Usuário não encontrado.' });
      return;
    }
    
    const userSummary = {
      message: 'Usuário alterado com sucesso.',
      user: {
        id: _user.id,
        name: _user.name,
        usr: _user.usr,
        userType: {
          name: _user.userType.name,
          description: _user.userType.description,
        },
        active: _user.active,
      }
    };
    
    return userSummary;

  } catch (error) {
    throw error;
  } finally {
  }
}
