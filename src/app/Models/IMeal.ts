import { IPrice } from "./IPrice";

export interface IMeal {
  Id: string;
  mealName: string;
  thumbNail: string;
  price: IPrice[];
}