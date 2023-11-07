// defined context in order to have access to userModelState in two pages
// of the wizard app...

import { createContext, useState } from "react";
import { ChildrenProp, UserModel } from "../interface/interface";

interface UserContextProp {
  userModelState: UserModel;
  setUserModelState: React.Dispatch<React.SetStateAction<UserModel>>;
}

// define context
export const UserContext = createContext({} as UserContextProp);

// define context provider component
export const UserProvider = ({ children }: ChildrenProp) => {

  // user model state for storing values
  const [userModelState, setUserModelState] = useState<UserModel>({
    name: "",
    age: "",
    email: "",
    newsletter: "daily", // default value
  });
  
  return (
    <UserContext.Provider value={{ userModelState, setUserModelState }}>
      {children}
    </UserContext.Provider>
  )
}