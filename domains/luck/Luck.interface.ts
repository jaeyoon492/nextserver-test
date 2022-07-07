import { ChangeEvent, Dispatch, SetStateAction } from "react";

export namespace ILuck {
  export interface IProps {}
  export interface IVProps {
    todaysLuck: string;
    info: string;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleOnClick: () => void;
  }
}
