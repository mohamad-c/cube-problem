import Input from "../components/Input";
import Radio from "../components/Radio";
import { useContext } from "react";
import { ErrorContext } from "../context/InputErrorContext";
import { UserContext } from "../context/UserContext";

export default function NewsLetterPage() {
  const { setUserModelState, userModelState } = useContext(UserContext);
  const { inputErrorState } = useContext(ErrorContext);

  return (
    <>
      <div className="space-y-2">
        <Input
          label="Email"
          type="text"
          name="email"
          id="email"
          placeholder="Enter your email"
          value={userModelState["email"]}
          setUserModelState={setUserModelState}
          inputErrorState={inputErrorState}
        />
        <div className="flex justify-start flex-col content-end">
          <p className="text-black text-sm font-semibold whitespace-nowrap">
            News letter
          </p>
          <div className="mt-4 flex justify-start flex-col">
            <Radio
              id="daily"
              label="daily"
              name="daily"
              value={userModelState["newsletter"]}
              inputErrorState={inputErrorState}
              setUserModelState={setUserModelState}
            />
            <Radio
              id="weekly"
              label="weekly"
              name="weekly"
              value={userModelState["newsletter"]}
              inputErrorState={inputErrorState}
              setUserModelState={setUserModelState}
            />
            <Radio
              id="monthly"
              label="monthly"
              name="monthly"
              inputErrorState={inputErrorState}
              value={userModelState["newsletter"]}
              setUserModelState={setUserModelState}
            />
          </div>
        </div>
      </div>
    </>
  );
}
