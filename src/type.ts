import { TFunction } from "i18next";
import { Dispatch, SetStateAction } from "react";

export type DataDetails ={
    age?: string;
    count?: number;
    name?: string
}[]

export type SearchProps = {
  keyword: string;
  setKeyword: Dispatch<SetStateAction<string>>;
  handleSubmit: () => void;
  t: TFunction<any, undefined, any>;
};