import { useContext } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { ErrorContext } from "../context/InputErrorContext";
import {
  userSchemaPartOne,
  userSchemaPartTwo,
} from "../helpers/userValidationSchema";
import { UserContext } from "../context/UserContext";
import { toast } from 'react-hot-toast';

export default function Card() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const { setInputErrorState } = useContext(ErrorContext);
  const { userModelState } = useContext(UserContext);

  // submit function that has to be promise
  const submitUser = () => {
    if (pathname === "/") {
      // Validation for step 1
      userSchemaPartOne
        .validate(userModelState, { abortEarly: false })
        .then(() => {
          navigate("/2"); // step one completed then navigates user to next step
          setInputErrorState([{ message:"", path: "" }]) // clears error state 
          toast.success("Step 1 completed ✨") // shows success toast
        })
        .catch((errors) => {
          const err = errors.inner.map(
            (error: { message: string; path: string }) => {
              return { message: error.message, path: error.path };
            }
          ); // returns errors for each input
          setInputErrorState(err); // sets error state
          toast.error("Validation error") // shows error toast
        });
    } else if (pathname === "/2") {
      // Validation for step 2
      userSchemaPartTwo
        .validate(userModelState, { abortEarly: false })
        .then((validData) => {
          // Proceed with submission for step 2
          setInputErrorState([{ message:"", path: "" }]);
          toast.success(`Account created, ${validData.email} ✨`)
        })
        .catch((errors) => {
          const err = errors.inner.map(
            (error: { message: string; path: string }) => {
              return { message: error.message, path: error.path };
            }
          );
          setInputErrorState(err);
        });
    }
  };
  return (
    <>
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          Cube Wizard.
        </h5>
        <Outlet />
        <div className="mt-5 flex justify-evenly">
          <button
            disabled={pathname === "/" ? true : false}
            className={
              pathname === "/"
                ? "bg-slate-400"
                : "bg-rose-500 hover:bg-rose-600"
            }
            onClick={() => navigate("/")}
          >
            Prev
          </button>
          <button
            className="bg-green-500 hover:bg-green-600"
            onClick={submitUser}
          >
            Next
          </button>
        </div>
        <p className="text-sm text-gray-500 font-medium text-center mt-5">
          step {pathname === "/" ? "1" : "2"} of 2
        </p>
      </div>
    </>
  );
}
