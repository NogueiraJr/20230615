import { _getUser } from "../../repository/user/getUser";
import { _getUserCollection } from "../../repository/user/getUserCollection";

export async function getUserCollection(id: string, reply: any) {
  try {
    const collectionUsers = await _getUserCollection(id);
    if (!collectionUsers[0]) return reply.status(404).send({ message: 'Usuário principal não encontrado' });
    const mainUser = collectionUsers.find((user: any) => user.id === id);

    function mapCollectionUsers(user: any): any[] {
      const subUsers = collectionUsers.filter((subUser: any) => subUser.userId === user.id);
      return subUsers.map((subUser: any) => ({
        id: subUser.id,
        name: subUser.name,
        usr: subUser.usr,
        active: subUser.active,
        userType: {
          id: subUser.userType.id,
          name: subUser.userType.name,
          description: subUser.userType.description,
          active: subUser.userType.active,
        },
        subUsers: mapCollectionUsers(subUser), // Chama a função recursivamente para mapear os subusuários dos subusuários
      }));
    }

    mainUser.subUsers = mapCollectionUsers(mainUser);

    // Filter the main user fields
    const filteredMainUser = {
      id: mainUser.id,
      name: mainUser.name,
      usr: mainUser.usr,
      active: mainUser.active,
    userType: {
        id: mainUser.userType.id,
        name: mainUser.userType.name,
        description: mainUser.userType.description,
        active: mainUser.userType.active,
      },
      subUsers: mainUser.subUsers,
    };

    return filteredMainUser;
  } catch (error) {
    throw error;
  }
}
