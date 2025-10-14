import { z } from 'zod';

export const userSchema = z
  .object({
    Email: z.string().email(),
    Password: z.string().min(8),
    ConfirmPassword: z.string().min(8),
  })
  .refine((data) => data.Password === data.ConfirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });
