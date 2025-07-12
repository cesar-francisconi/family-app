import z from "zod";

export const formSchemaSignUp = z.object({
    email: z.email({ error: 'Digite um e-mail válido.' }),

    name: z
        .string()
        .min(2, { message: 'O nome deve ter pelo menos 2 caracteres.' })
        .regex(/^[A-Za-zÀ-ÿ\s]+$/, {
            message: 'O nome não pode conter números ou caracteres especiais.',
        }),

    lastName: z
        .string()
        .min(2, { message: 'O sobrenome deve ter pelo menos 2 caracteres.' })
        .regex(/^[A-Za-zÀ-ÿ\s]+$/, {
            message: 'O sobrenome não pode conter números ou caracteres especiais.',
        }),

    password: z
        .string()
        .min(6, { message: 'A senha deve ter pelo menos 6 caracteres.' })
        .max(16, { message: 'A senha deve ter no máximo 16 caracteres.' })
        .regex(/[A-Z]/, {
            message: 'A senha deve conter pelo menos uma letra maiúscula.',
        })
        .regex(/[0-9]/, {
            message: 'A senha deve conter pelo menos um número.',
        })
        .regex(/[^A-Za-z0-9]/, {
            message: 'A senha deve conter pelo menos um caractere especial.',
        }),
});

export type FormDataSignUp = z.infer<typeof formSchemaSignUp>;