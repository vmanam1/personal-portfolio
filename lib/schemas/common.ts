import { z } from "zod";

export const yearMonthSchema = z
  .string()
  .regex(/^\d{4}-(0[1-9]|1[0-2])$/, "Expected YYYY-MM");

export const externalLinkSchema = z.object({
  label: z.string().min(1),
  href: z
    .url()
    .refine(
      (url) => url.startsWith("https://"),
      "External links must use HTTPS",
    ),
});
