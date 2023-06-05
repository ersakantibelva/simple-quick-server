import jwt, { Secret } from "jsonwebtoken";

export const secretKey: Secret = "secretjwt";

export const createToken = (payload: object) => jwt.sign(payload, secretKey);

export const verifyToken = (token: string) => jwt.verify(token, secretKey);
