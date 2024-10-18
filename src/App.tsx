import "./App.css";
import { useState, useEffect } from "react";
import RegisterForm from "./pages/RegisterForm.tsx";
import LandingPage from "./pages/LandingPage.tsx";

function App() {
  // 2 minutos
  const dataExpirationDelay = 2 * 60 * 1000;
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const API_URL = "http://localhost:3000/mock";
  const authData = localStorage.getItem("authData");

  useEffect(() => {
    if (authData != null) {
      const authDataJson = JSON.parse(authData);
      if (authDataJson.expiredTime <= Date.now()) {
        setIsAuthenticated(false);
        localStorage.removeItem("authData");
      } else {
        setIsAuthenticated(true);
      }
    }
  }, [isAuthenticated]);

  return isAuthenticated == true ? (
    <LandingPage data={authData} />
  ) : (
    <RegisterForm
      API_URL={API_URL}
      setIsAuthenticated={setIsAuthenticated}
      expirationDelay={dataExpirationDelay}
    />
  );
}

export default App;
