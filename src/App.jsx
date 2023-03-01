import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import SignupPage from "./pages/signup";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
