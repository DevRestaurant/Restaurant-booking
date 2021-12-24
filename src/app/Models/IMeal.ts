import { IPrice } from "./IPrice";

export interface IMeal {
  mealName: string;
  thumbNail: string;
  price: IPrice[];
}