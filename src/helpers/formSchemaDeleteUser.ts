import z from "zod";

export const formSchemaDeleteUser = z.object({
    confirmEmail: z.email({ error: 'Digite um e-mail válido.' }),

    confirmPassword: z
        .string()
        .min(6, { message: 'Digite sua senha atual (mín. 6 caracteres).' }),
});

export type FormDataDeleteUser = z.infer<typeof formSchemaDeleteUser>;