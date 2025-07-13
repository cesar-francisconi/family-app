import z from "zod";

export const formSchemaEmailChange = z.object({
    confirmEmail: z.email({ error: 'Digite um e-mail válido.' }),

    confirmPassword: z
        .string()
        .min(6, { message: 'Digite sua senha atual (mín. 6 caracteres).' }),

    newEmail: z.email({ error: 'Digite um e-mail válido.' }),
});

export type FormDataEmailChange = z.infer<typeof formSchemaEmailChange>;