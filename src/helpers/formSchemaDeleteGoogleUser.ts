import z from "zod";

export const formSchemaDeleteGoogleUser = z.object({
    confirmEmail: z.email({ error: 'Digite um e-mail válido.' }),
});

export type FormDataDeleteGoogleUser = z.infer<typeof formSchemaDeleteGoogleUser>;