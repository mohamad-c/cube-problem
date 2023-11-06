// defined context in order to have access to inputErrorState in two pages
// of the wizard app...

import { createContext, useState } from "react";
import { ChildrenProp, InputErrorModel } from "../interface/interface";

interface ErrorContextProp {
  inputErrorState: InputErrorModel[];
  setInputErrorState: React.Dispatch<React.SetStateAction<InputErrorModel[]>>;
}

// define context
export const ErrorContext = createContext({} as ErrorContextProp);

// define context provider component
export const InputErrorProvider = ({ children }: ChildrenProp) => {
  // input error model state for storing values
  const [inputErrorState, setInputErrorState] = useState<InputErrorModel[]>([
    {
      message: "",
      field: "",
    },
  ]);

  return (
    <ErrorContext.Provider value={{ inputErrorState, setInputErrorState }}>
      {children}
    </ErrorContext.Provider>
  );
};
