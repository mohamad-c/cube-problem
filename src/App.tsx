import { useContext } from "react";
import "./App.css";
import Input from "./components/Input";
import { UserContext } from "./context/UserContext";
import { userSchema } from "./helpers/userValidationSchema";
import { ErrorContext } from "./context/InputErrorContext";

function App() {
  const { setUserModelState, userModelState } = useContext(UserContext);
  const { inputErrorState, setInputErrorState } = useContext(ErrorContext);

  const submitUser = () => {
    userSchema
      .validate(userModelState, { abortEarly: false })
      .then((validData) => {
        // Form data is valid, proceed with submission
        console.log(validData);
      })
      .catch((errors) => {
        // Form data is invalid, handle errors
        console.error(errors);
        const err = errors.inner.map((error) => {
          return { message: error.message, field: error.path };
        });
        setInputErrorState(err);
      });
  };
  console.log(inputErrorState);
  return (
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
        value={userModelState["email"]}
        setUserModelState={setUserModelState}
        label="email"
        id="email"
        placeholder="Enter your email"
        type="text"
        name="email"
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
      <button onClick={submitUser}>submit</button>
    </>
  );
}

export default App;
