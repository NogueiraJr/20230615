import { _createUser } from "../../repository/user/createUser";

export async function createUser(userTypeId: string, name: string, usr: string, psw: string, emailData: any[], phoneData: any[]) {
  try {
    const user = await _createUser(userTypeId, name, usr, psw, emailData, phoneData);
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
