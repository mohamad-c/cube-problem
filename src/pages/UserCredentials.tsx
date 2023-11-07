import Input from "../components/Input";
import { useContext } from "react";
import { ErrorContext } from "../context/InputErrorContext";
import { UserContext } from "../context/UserContext";

export default function UserCredentialsPage() {
  const { setUserModelState, userModelState } = useContext(UserContext);
  const { inputErrorState } = useContext(ErrorContext);

  return(
    <>
      <Input
        inputErrorState={inputErrorState}
        setUserModelState={setUserModelState}
        label="name"
        value={userModelState["name"]}
        id="name"
        placeholder="Enter your name"
        type="text"
        name="name"
      />
      <Input
        inputErrorState={inputErrorState}
        label="age"
        setUserModelState={setUserModelState}
        value={userModelState["age"]}
        id="age"
        placeholder="age"
        type="number"
        name="age"
      />
    </>
  )
}