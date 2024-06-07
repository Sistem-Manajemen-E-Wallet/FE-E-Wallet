import { userLogin, userRegister, merchantRegister } from "./api";
import {
  loginSchema,
  LoginTypes,
  LoginType,
  registerSchema,
  RegisterType,
  ModelLogoutProps,
} from "./types";

export {
  userLogin,
  loginSchema,
  userRegister,
  merchantRegister,
  registerSchema,
};
export type { LoginTypes, LoginType, RegisterType, ModelLogoutProps };
