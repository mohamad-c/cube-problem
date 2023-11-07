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

  const radioHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserModelState((prevUserModel: UserModel) => ({
      ...prevUserModel,
      newsletter: e.target.id as 'daily' | 'weekly' | 'monthly',
    }));
  };

  return (
    <>
      <label htmlFor={id} className="text-black">
        <input
          type="radio"
          name={name}
          id={id}
          checked={value === id}
          onChange={radioHandler}
          className="text-black"
        />
        {label}
      </label>
      {
        // we can decide whether validate radio buttons or not 
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
