import z from "zod";

export const formSchemaPasswordChange = z.object({
    currentPassword: z
        .string()
        .min(6, { message: 'Digite sua senha atual (mín. 6 caracteres).' }),

    newPassword: z
        .string()
        .min(6, { message: 'A nova senha deve ter pelo menos 6 caracteres.' })
        .max(16, { message: 'A nova senha deve ter no máximo 16 caracteres.' })
        .regex(/[A-Z]/, {
            message: 'A nova senha deve conter pelo menos uma letra maiúscula.',
        })
        .regex(/[0-9]/, {
            message: 'A nova senha deve conter pelo menos um número.',
        })
        .regex(/[^A-Za-z0-9]/, {
            message: 'A nova senha deve conter pelo menos um caractere especial.',
        }),

    confirmNewPassword: z
        .string()
        .min(6, { message: 'Digite sua nova senha novamente (mín. 6 caracteres).' }),
})
    .refine((data) => data.newPassword === data.confirmNewPassword, {
        path: ['confirmNewPassword'],
        message: 'As senhas não coincidem.',
    });

export type FormDataPasswordChange = z.infer<typeof formSchemaPasswordChange>;