// defined an isolated input component for the
// three inputs on the app

import { InputErrorModel, UserModel } from "../interface/interface";

// defined expected input props interface
interface inputProps {
  type: "text" | "number" | "email";
  placeholder: string;
  label: string;
  id: string;
  name: string;
  value: string | number;
  setUserModelState: React.Dispatch<React.SetStateAction<UserModel>>;
  inputErrorState: InputErrorModel[];
}

// defined input component with the needed props
export default function Input({
  type,
  placeholder,
  id,
  label,
  name,
  value,
  setUserModelState,
  inputErrorState,
}: inputProps) {
  // function to handle input chnage event based on string values
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    // holding(copying) the last state values, then injecting newly
    // entered values dynamically based on thier ids...
    setUserModelState((prevUserModel: UserModel) => ({
      ...prevUserModel,
      [e.target.id]: e.target.value,
    }));
  };

  // function to handle input chnage event based on number values
  const numberInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    // holding(copying) the last state values, then injecting converted newly
    // entered values dynamically based on thier ids...
    setUserModelState((prevUserModel: UserModel) => ({
      ...prevUserModel,
      [e.target.id]: Number(e.target.value),
    }));
  };

  return (
    <>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {label}
      </label>
      <input
        className="bg-gray-50 border w-[300px] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        type={type}
        placeholder={placeholder}
        id={id}
        name={name}
        value={value}
        // check when to use which handler function based on the types
        onChange={typeof value === "number" ? numberInputHandler : inputHandler}
      />
      {
        // display error messages for each input based on thier id field
        inputErrorState ? (
          // filter out items with the same fields to display errors one by one on each field
          inputErrorState
            .filter((error, index, arr) => {
              return arr.findIndex((e) => e.field === error.field) === index;
            })
            .map((item) => {
              return (
                <p
                  key={item.field}
                  className="text-rose-600 font-semibold text-sm"
                >
                  {item.field === id ? item.message : ""}
                </p>
              );
              // error is undefined at first so we render nothing (<></>)
            })
        ) : (
          <></>
        )
      }
    </>
  );
}
