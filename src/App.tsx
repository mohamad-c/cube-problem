import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserCredentialsPage from "./pages/UserCredentials";
import NewsLetterPage from "./pages/NewsLetter";
import { UserProvider } from "./context/UserContext";
import { InputErrorProvider } from "./context/InputErrorContext";

function App() {
  // submit function that has to be promise
  // const submitUser = () => {
  //   userSchema
  //     .validate(userModelState, { abortEarly: false })
  //     .then((validData) => {
  //       // Form data is valid, proceed with submission
  //       console.log(validData);
  //     })
  //     .catch((errors) => {
  //       // Form data is invalid, handle errors
  //       console.error(errors);
  //       const err = errors.inner.map(
  //         (error: { message: string; path: string }) => {
  //           return { message: error.message, field: error.path };
  //         }
  //       );
  //       setInputErrorState(err);
  //     });
  // };
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <UserProvider>
                <InputErrorProvider>
                  <UserCredentialsPage />
                </InputErrorProvider>
              </UserProvider>
            }
          />
          <Route
            path="/newsletter"
            element={
              <UserProvider>
                <InputErrorProvider>
                  <NewsLetterPage />
                </InputErrorProvider>
              </UserProvider>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
