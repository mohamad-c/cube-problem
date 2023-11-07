import { InputErrorModel, UserModel } from "../interface/interface";

interface radioProps {
  label: string;
  id: string;
  name: string;
  value: string | number;
  setUserModelState: React.Dispatch<React.SetStateAction<UserModel>>;
  inputErrorState: InputErrorModel[];
}

export default function Radio({
  label,
  value,
  name,
  id,
  inputErrorState,
  setUserModelState,
}: radioProps) {
  // function to handle radio group
  const radioHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserModelState((prevUserModel: UserModel) => ({
      ...prevUserModel,
      newsletter: e.target.id as "daily" | "weekly" | "monthly",
    }));
  };

  return (
    <>
      <div className="flex items-center mb-4">
        <input
          type="radio"
          name={name}
          id={id}
          checked={value === id}
          onChange={radioHandler}
          className="w-4 h-4 bg-gray-100 border-gray-300"
        />
        <label htmlFor={id} className="ml-2 text-sm font-medium text-gray-900">
          {label}
        </label>
      </div>
      {
        // we can decide whether validate radio buttons or not
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
                  className="text-rose-600 font-semibold text-sm"
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
