import { z } from 'zod';

// Define o esquema para um único e-mail
const emailSchema = z.object({
  address: z.string().email(),
});

// Define o esquema para um ou mais e-mails
const emailsSchema = z.array(emailSchema);

// Define o esquema para criar um usuário
export const createUserSchema = z.object({
  name: z.string(),
  emails: emailsSchema,
  userTypeId: z.string(), // Adicione o userTypeId ao esquema
});

// Define o esquema para atualizar um usuário
export const updateUserSchema = z.object({
  name: z.string(),
  emails: emailsSchema,
  userTypeId: z.string(), // Adicione o userTypeId ao esquema
});

