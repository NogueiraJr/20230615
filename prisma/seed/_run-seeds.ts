import { exec } from 'child_process';

const seedCommands = [
  'userEmailTypesSeed.ts',
  'userPhoneTypesSeed.ts',
  'userTypesSeed.ts',
  'usersSeed.ts',
  
  'systemsSeed.ts',
  'menusSeed.ts',
  'modulesSeed.ts',
  'systemsMenusModulesSeed.ts',
  
  'userSystemsMenusModulesSeed-auto.ts',
  'userSystemsMenusModulesSeed-specific.ts',
  
  'clientsSeed.ts',
  'suppliersSeed.ts',
  'partnersSeed.ts',

  'userClientsSeed.ts',
  'userSuppliersSeed.ts',
  'userPartnersSeed.ts',

  'actionsSeed.ts',
  'actionsFlowPointsSeed.ts',

  'itemTypesSeed.ts',
  'itemsSeed.ts',

  'tagsSeed.ts',

  'userOperationsSeed.ts',
];

const runSeeds = async () => {
  for (const seedCommand of seedCommands) {
    await runCommand(`ts-node prisma/seed/${seedCommand}`);
  }
};

const runCommand = (command: string) => {
  return new Promise<void>((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error executing command: ${command}`);
        reject(error);
      } else {
        console.log(`Command executed successfully: ${command}`);
        resolve();
      }
    });
  });
};

runSeeds().catch(error => {
  console.error('Error running seeds:', error);
});
