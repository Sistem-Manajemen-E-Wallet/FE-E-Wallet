import { z } from "zod";

export const profileUpdateSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  phone_number: z.string().min(10, { message: "Phone number is required" }),
  address: z.string().min(1, { message: "Address is required" }),
});

export type RoleType = "Customer" | "Merchant";

export interface ProfileType {
  id: number;
  name: string;
  email: string;
  role: RoleType;
  profile_picture: string;
}

export type ProfileUpdateType = z.infer<typeof profileUpdateSchema>;
