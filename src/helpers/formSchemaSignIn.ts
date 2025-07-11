import z from "zod";

export const formSchemaSignIn = z.object({
    email: z.email({ error: 'Digite um e-mail válido.' }),

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

export type FormDataSignIn = z.infer<typeof formSchemaSignIn>;