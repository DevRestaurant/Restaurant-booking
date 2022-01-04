import { Action, createReducer, on } from "@ngrx/store"
import { AuthLoginAction } from "../Actions/auth.actions";

export const initialState: any = {
  email: "",
  password: ""
}

const reducer = createReducer(
  initialState,
  on(AuthLoginAction, (state: any, action: { payload: any; }) => {
    state = action.payload;
     return state
  }));

  export function AuthReducer(state = initialState, action: Action){
    return reducer(state, action);
  }