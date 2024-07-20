import { _deleteUser } from '../../repository/user/deleteUser';

export async function deleteUser(id: string, reply: any) {
  try {
    let _user = await _deleteUser(id);
    if (!_user) {
      reply.status(404).send({ error: 'Usuário não encontrado.' });
      return;
    }
    
    const userSummary = {
      message: 'Usuário apagado com sucesso.',
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
