import { useContext } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { ErrorContext } from "../context/InputErrorContext";
import { UserContext } from "../context/UserContext";
import addUser from "../helpers/addUserFunction";

export default function Card() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const { setInputErrorState } = useContext(ErrorContext);
  const { userModelState, setUserModelState } = useContext(UserContext);

  // submit function that has to be promise
  const submitUser = async () => {
    const user = await addUser(
      {
        age: Number(userModelState.age), // convert age string to Number
        email: userModelState.email,
        name: userModelState.name,
        newsletter: userModelState.newsletter,
      },
      pathname,
      navigate,
      setInputErrorState,
      setUserModelState
    );
    console.log(user); // do whatever with newly created user ex. save it to a DB
  };

  return (
    <>
      <div className="max-w-sm p-6 bg-white border border-stone-300 rounded-lg shadow-md">
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
            {pathname === "/" ? "Next" : "Create user"}
          </button>
        </div>
        <p className="text-sm text-gray-500 font-medium text-center mt-5">
          step {pathname === "/" ? "1" : "2"} of 2
        </p>
      </div>
    </>
  );
}
