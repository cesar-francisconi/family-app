import z from "zod";

export const formSchemaSearch = z.object({
    search: z
        .string()
});

export type FormDataSearch = z.infer<typeof formSchemaSearch>;