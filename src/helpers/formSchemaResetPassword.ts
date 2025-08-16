import z from "zod";

export const formSchemaResetPassword = z.object({
    resetEmail: z.email({ error: 'Digite um e-mail válido.' }),
});

export type FormDataResetPassword = z.infer<typeof formSchemaResetPassword>;