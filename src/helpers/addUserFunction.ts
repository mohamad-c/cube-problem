// did not find any promise function that returns a promise
// in the problem so here is my own addUser promise function
// simulating an endpoint call

import { NavigateFunction } from "react-router-dom";
import { InputErrorModel, UserModel } from "../interface/interface";
import {
  userSchame,
  userSchemaPartOne,
  userSchemaPartTwo,
} from "./userValidationSchema";
import { toast } from "react-hot-toast";

type ResolveFunction<T> = (value: T) => void;
type RejectFunction = (reason: any) => void;

export default function addUser(
  userModel: UserModel,
  path: string,
  navigate: NavigateFunction,
  setInputErrorState: (value: React.SetStateAction<InputErrorModel[]>) => void,
  setUserModelState: React.Dispatch<React.SetStateAction<UserModel>>
): Promise<{ message: string; userModel: UserModel }> {
  return new Promise(
    (
      resolve: ResolveFunction<{ message: string; userModel: UserModel }>,
      reject: RejectFunction
    ) => {
      if (path === "/") {
        // Validation for step 1
        userSchemaPartOne
          .validate(userModel, { abortEarly: false })
          .then(() => {
            navigate("/2"); // step one completed then navigates user to next step
            setInputErrorState([]); // clears error state
            toast.success("Step 1 completed ✨"); // shows success toast
          })
          .catch((errors) => {
            const err = errors.inner.map(
              (error: { message: string; path: string }) => {
                return { message: error.message, path: error.path };
              }
            ); // returns errors for each input
            setInputErrorState(err); // sets error state
            toast.error("Validation error"); // shows error toast
          });
      } else if (path === "/2") {
        // Validation for step 2
        userSchemaPartTwo
          .validate(userModel, { abortEarly: false })
          .then(() => {
            // Proceed with submission for step 2
            setInputErrorState([]);
            toast.success("Step 2 completed ✨");
          })
          .catch((errors) => {
            const err = errors.inner.map(
              (error: { message: string; path: string }) => {
                return { message: error.message, path: error.path };
              }
            );
            setInputErrorState(err);
            toast.error("Validation error"); // shows error toast
          });

        // validate all sent data at once to resolve, reject promise
        setTimeout(() => {
          userSchame // use the combined schemas to validate all data at once
            .validate(userModel, { abortEarly: false })
            .then((validData) => {
              // Proceed with submission for step 2
              setInputErrorState([]);
              toast.success(
                `Account created, Welcome ${validData.name}`
              );
              resolve({ message: "User added successfully", userModel }); // pass user model obeject and display a success message
              // reset inputs
              setUserModelState({
                name: "",
                email: "",
                age: "",
                newsletter: "daily"
              })
              // navigate to first step after creating new user
              navigate("/");
            })
            .catch((errors) => {
              const err = errors.inner.map(
                (error: { message: string; path: string }) => {
                  return { message: error.message, path: error.path };
                }
              );
              setInputErrorState(err);
              toast.error(
                "Error occured. Complete all steps"
              );
              reject("Error occured");
            });
        }, 1000);
      }
    }
  );
}
