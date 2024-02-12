import { _getUser } from "../../repository/user/getUser";
import { _getUserCollection } from "../../repository/user/getUserCollection";

export async function getUserSystemMenuModule(id: string) {
  try {
    const user = await _getUser(id);

    // Extrair informações do sistema fora do mapeamento
    const systemInfo = user?.userSystemMenuModule.map(userSystemMenuModule => {
      const system = userSystemMenuModule.systemMenuModule.system;
      return {
        id: system?.id,
        name: system?.name,
        description: system?.description
      };
    });

    // Filtrar para garantir que apenas valores únicos sejam mantidos
    const uniqueSystemInfo = systemInfo ? systemInfo.filter((system, index, self) =>
      index === self.findIndex((t) => (
        t.id === system.id
      ))
    ) : [];

    const userSummary = {
      name: user?.name,
      usr: user?.usr,
      userType: {
        name: user?.userType.name,
        description: user?.userType.description,
      },
      active: user?.active,
      systemInfo: uniqueSystemInfo, 
      userSystemMenuModule: user?.userSystemMenuModule.map((userSystemMenuModule) => ({
        menuName: userSystemMenuModule.systemMenuModule.menu?.name, 
        moduleName: userSystemMenuModule.systemMenuModule.module?.name, 
        systemMenuModuleId: userSystemMenuModule.systemMenuModuleId,
        active: userSystemMenuModule.active,
      })),
    };

    return userSummary;
  } catch (error) {
    throw error;
  }
}
