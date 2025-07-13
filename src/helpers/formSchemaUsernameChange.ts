import z from "zod";

export const formSchemaUsernameChange = z.object({
    newUsername: z
        .string()
        .min(2, { message: 'O nome de usuário deve ter pelo menos 2 caracteres.' })
        .max(18, { message: 'O nome de usuário deve ter no máximo 18 caracteres.' })
        .refine((value) => !/\s/.test(value), {
            message: 'Não é permitido usar espaços no nome de usuário.',
        })
        .refine((value) => !/[0-9]/.test(value), {
            message: 'O nome de usuário não pode conter números.',
        })
        .refine((value) => /^[A-Za-zÀ-ÿ]+$/.test(value), {
            message: 'O nome de usuário não pode conter caracteres especiais.',
        }),
});

export type FormDataUsernameChange = z.infer<typeof formSchemaUsernameChange>;