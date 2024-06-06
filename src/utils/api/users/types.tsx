import { z } from "zod";

export interface ResponseProfile {
  message: string;
  data: any;
}

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
}

export const editProfileSchema = z.object({
  name: z.string().min(1, { message: "Fullname is required" }),
  email: z.string().min(1, { message: "Email is required" }),
  address: z.string().min(1, { message: "Address is required" }),
});

export const MAX_FILE_SIZE = 5000000;
export const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

export const updatePhotoSchema = z.object({
  profile_picture: z
    .any()
    .refine((files) => files[0].size <= MAX_FILE_SIZE, "Max image size is 5MB")
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      "Only .jpg, .jpeg, .png formats are supported"
    )
    .optional()
    .or(z.literal("")),
});

export type ProfileUpdateType = z.infer<typeof profileUpdateSchema>;
export type EditProfileType = z.infer<typeof editProfileSchema>;
export type UpdatePictureType = z.infer<typeof updatePhotoSchema>;
