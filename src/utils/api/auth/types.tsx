import * as z from "zod";

export const loginSchema = z.object({
  phone_number: z.string().min(10, { message: "Phone Number is required" }),
  pin: z.string().min(6, { message: "Pin is required" }),
});

export interface LoginTypes {
  id: number;
  name: string;
  role: string;
  token: string;
}

export type LoginType = z.infer<typeof loginSchema>;
