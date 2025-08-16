import z from "zod";

export const formSchemaUsernameChange = z.object({
    newUsername: z
        .string()
        .min(2, { message: 'O nome de usuário deve ter pelo menos 2 caracteres.' })
        .max(30, { message: 'O nome de usuário deve ter no máximo 30 caracteres.' })
        // Não permite espaços entre palavras
        .refine((value) => !/\S\s+\S/.test(value), {
            message: 'Não é permitido usar espaços entre palavras no nome de usuário.',
        })
        // Só permite letras, números, ponto, traço, underline e espaço (nas bordas)
        .refine((value) => /^[A-Za-zÀ-ÿ0-9._\- ]+$/.test(value), {
            message: 'O nome de usuário só pode conter os seguintes caracteres especiais: ponto (.), traço (-), underline (_)'
        })
        // Após remover espaços das bordas, só pode ter os caracteres válidos, sem espaço no meio
        .refine((value) => /^[A-Za-zÀ-ÿ0-9._\-]+$/.test(value.trim()), {
            message: 'O nome de usuário não pode conter espaços no meio ou caracteres inválidos.',
        }),
});

export type FormDataUsernameChange = z.infer<typeof formSchemaUsernameChange>;
