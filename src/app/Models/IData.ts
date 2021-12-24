import { IMeal } from "./IMeal";

export interface IData{
  data: IMeal[];
  succeeded: boolean;
  statusCode: number;
  message: string;
}