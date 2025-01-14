import { z } from "zod";

export const signUpSchema = z.object({
  email: z.string({ message: "Email is required." }).email("Email must be valid"),
  password: z
    .string({ message: "Password must contain alphanumeric characher(s)" })
    .min(8, { message: "password must contain at least 6 character(s)" }),
  name: z
    .string({ message: "Name is required" })
    .min(1, { message: "Name is required" })
    .max(50, { message: "Name cannot exceed 50 characters" }),
});

export const signInSchema = z.object({
  email: z.string({ message: "Email is required." }).email("Email must be valid"),
  password: z
    .string({ message: "Password must contain alphanumeric characher(s)" })
    .min(8, { message: "password must contain at least 6 character(s)" }),
});

export const createRoomSchema = z.object({
  name: z
    .string({ message: "Room Name is required" })
    .min(3, { message: "Room Name must have atleast 3 chars" })
    .max(20, { message: "Room Name cannot exceed 20 characters" }),
});
