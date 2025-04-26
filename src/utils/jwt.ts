import { Types } from "mongoose";
import { User } from "../models/user.model";
import jwt from "jsonwebtoken";
import { SECRET } from "./env";

interface IUserToken
  extends Omit<
    User,
    | "password"
    | "activationCode"
    | "email"
    | "username"
    | "fullName"
    | "profilePicture"
  > {
  id?: Types.ObjectId;
}

export const generateToken = (user: IUserToken): string => {
  const token = jwt.sign(user, SECRET, {
    expiresIn: "1h",
  });

  return token;
};

export const generateUserData = (token: string) => {
    const user = jwt.verify(token, SECRET) as IUserToken;
};
