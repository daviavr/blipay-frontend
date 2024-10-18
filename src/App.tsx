import "./App.css";
import { useState, useEffect } from "react";
import Register from "./components/register/Register.tsx";
import Result from "./components/result/Result.tsx";

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
  }, []);

  return isAuthenticated == true ? (
    <Result data={authData} />
  ) : (
    <Register
      API_URL={API_URL}
      setIsAuthenticated={setIsAuthenticated}
      expirationDelay={dataExpirationDelay}
    />
  );
}

export default App;
