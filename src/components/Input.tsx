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
  const inputClasses = [
    "bg-gray-50",
    "border",
    "w-[300px]",
    "text-gray-900",
    "text-sm",
    "rounded-lg",
    "block",
    "p-2.5",
    "focus:ring-1",
    "font-medium"
  ];
  return (
    <>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {label}
      </label>
      <input
        // check wether there is an input error or not
        className={
          inputErrorState.length === 0
            ? [...inputClasses, "border-gray-300", "focus:ring-stone-400"].join(" ")
            : [...inputClasses, "border-rose-600", "focus:ring-rose-500"].join(" ")
        }
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
        inputErrorState.length !== 0 ? (
          // filter out items with the same fields to display errors one by one on each field
          inputErrorState
            .filter((error, index, arr) => {
              return arr.findIndex((e) => e.path === error.path) === index;
            })
            .map((item) => {
              return (
                <p
                  key={item.path}
                  className="text-rose-600 font-semibold text-xs"
                >
                  {item.path === id ? item.message : ""}
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
