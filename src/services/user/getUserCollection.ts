import { _getUser } from "../../repository/user/getUser";
import { _getUserCollection } from "../../repository/user/getUserCollection";

export async function getUserCollection(id: string) {
  try {
    const collectionUsers = await _getUserCollection(id);

    const mainUser = collectionUsers.find((user: any) => user.id === id);

    if (!mainUser) {
      throw new Error('Usuário principal não encontrado.');
    }

    function mapCollectionUsers(user: any): any[] {
      const subUsers = collectionUsers.filter((subUser: any) => subUser.userId === user.id);
      return subUsers.map((subUser: any) => ({
        ...subUser,
        subUsers: mapCollectionUsers(subUser), // Chama a função recursivamente para mapear os subusuários dos subusuários
      }));
    }

    mainUser.subUsers = mapCollectionUsers(mainUser);

    return mainUser;
  } catch (error) {
    throw error;
  }
}
