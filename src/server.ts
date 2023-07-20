import { PrismaClient } from '@prisma/client';
import fastify from 'fastify';
import { z } from 'zod';

const app = fastify()

const prisma = new PrismaClient();

app.get('/users', async () => {
    const users = await prisma.user.findMany();
    return { users };
})

app.post('/users', async (req, res) => {
    const createUserShema = z.object({
        name: z.string(),
        email: z.string().email(),
    })
    const { name, email } = createUserShema.parse(req.body);

    await prisma.user.create({
        data: {
            name,
            email,
        }
    })
    
    return res.status(201).send();
})

app.patch<{ Params: { id: string } }>('/users/:id', async (req, res) => {
    try {
        const updateUserSchema = z.object({
            name: z.string().optional(),
            email: z.string().email().optional(),
        });
        const { id } = req.params;
        const { name, email } = updateUserSchema.parse(req.body);
        
        const existingUser = await prisma.user.findUnique({ where: { id: id } });
        
        if (!existingUser) {
            return res.status(404).send({ message: 'Usuário não encontrado.' });
        }
        
        const user = await prisma.user.update({
            where: {
                id: id,
            },
            data: {
                name,
                email,
            },
        });

        return res.status(200).send({ user });

    } catch (error) {
        return res.status(400).send({ error });

    }
});

app.listen({
    host: '0.0.0.0',
    port: process.env.PORT ? Number(process.env.PORT) : 3333,
}).then(() => {
    console.log('HTTP Server Running')
})