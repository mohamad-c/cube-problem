import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserCredentialsPage from "./pages/UserCredentials";
import NewsLetterPage from "./pages/NewsLetter";
import Card from "./layout/Card";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Card />}>
            <Route path="/" element={<UserCredentialsPage />} />
            <Route path="/2" element={<NewsLetterPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
