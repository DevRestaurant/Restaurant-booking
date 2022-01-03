import { createAction, props } from "@ngrx/store";
import { AuthActionTypes } from "../Enum/AuthActionTypes";
import { ILogin } from "../Models/ILogin";

export const AuthLoginAction = createAction(
  AuthActionTypes.Login,
  props<{payload: ILogin}>()
);