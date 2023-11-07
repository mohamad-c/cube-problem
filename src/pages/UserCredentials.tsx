import Input from "../components/Input";
import { useContext } from "react";
import { ErrorContext } from "../context/InputErrorContext";
import { UserContext } from "../context/UserContext";

export default function UserCredentialsPage() {
  const { setUserModelState, userModelState } = useContext(UserContext);
  const { inputErrorState } = useContext(ErrorContext);

  return (
    <>
      <div className="space-y-2">
        <Input
          label="Name"
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name"
          value={userModelState["name"]}
          setUserModelState={setUserModelState}
          inputErrorState={inputErrorState}
        />
        <Input
          label="Age"
          type="number"
          name="age"
          id="age"
          placeholder="Enter your age"
          value={userModelState["age"]}
          setUserModelState={setUserModelState}
          inputErrorState={inputErrorState}
        />
      </div>
    </>
  );
}
