import { concat as innerConcat } from "./concat";

export const foo = (str) => innerConcat(str, "Hello");

export const concat = innerConcat;
