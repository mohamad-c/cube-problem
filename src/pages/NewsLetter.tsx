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
      <Input
        inputErrorState={inputErrorState}
        value={userModelState["email"]}
        setUserModelState={setUserModelState}
        label="email"
        id="email"
        placeholder="Enter your email"
        type="text"
        name="email"
      />
      <div className="mt-5 flex justify-center space-x-5 flex-col">
        <p className="text-black text-sm font-semibold whitespace-nowrap">News letter</p>
        <div className="mt-3 flex justify-center space-x-4 flex-row">
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
    </>
  );
}
