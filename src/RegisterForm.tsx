import { useState, useEffect } from "react";
import Input from "./components/Input";
import ValidationMessage from "./components/Validation";

const fetchData = async (income, API_URL) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ income: income }),
    });

    if (!response.ok) {
      throw new Error("Não foi possível obter resposta");
    }

    const data = await response;
    return data;
  } catch (error) {
    console.error(
      "Ocorreu o seguinte erro ao tentar realizar a requisição:",
      error
    );
    throw error;
  }
};

function RegisterForm({ setIsAuthenticated, expirationDelay, API_URL }) {
  const [user, setUser] = useState("");
  const [validUser, setValidUser] = useState(false);
  useEffect(() => {
    user.length >= 8 ? setValidUser(true) : setValidUser(false);
  }, [user]);

  const [age, setAge] = useState(NaN);
  const [validAge, setValidAge] = useState(false);
  useEffect(() => {
    !isNaN(+age) && age >= 18 && age <= 65 ? setValidAge(true) : setValidAge(false);
  }, [age]);

  const [income, setIncome] = useState(NaN);
  const [validIncome, setValidIncome] = useState(false);
  useEffect(() => {
    !isNaN(+income) && income > 0 ? setValidIncome(true) : setValidIncome(false);
  }, [income]);

  const [city, setCity] = useState("");
  const [validCity, setValidCity] = useState(false);
  useEffect(() => {
    city != "" ? setValidCity(true) : setValidCity(false);
  }, [city]);

  const [errMsg, setErrMsg] = useState("");
  useEffect(() => {
    setErrMsg("");
  }, [user, age, income, city]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetchData(income, API_URL);
    const jsonData = await response.json();

    if (validUser && validAge && validCity && validIncome) {
      const authData = {
        expiredTime: Date.now() + expirationDelay,
      };

      if (jsonData.status == "APPROVED") {
        authData["isApproved"] = true;
        authData["max_ammount"] = jsonData.max_ammount;
      } else if (jsonData.status == "DENIED") {
        authData["isApproved"] = false;
      } else {
        throw Error("API retornou valores inválidos");
      }

      localStorage.setItem("authData", JSON.stringify(authData));
      setIsAuthenticated(true);
    }
  };

  return (
    <section className="registerPage">
      <p className={errMsg != "" ? "" : "offscreen"}>
        O nome precisa ter no mínimo 8 caracteres
      </p>

      <form onSubmit={handleSubmit}>
        <Input
          content="Nome:"
          type="text"
          id="user"
          onChange={(e) => setUser(e.target.value)}
        />
        <ValidationMessage isInvalid={!validUser && user} message={"O nome precisa ter no mínimo 8 caracteres"}/>

        <Input
          content="Idade:"
          type="text"
          id="age"
          onChange={(e) => setAge(e.target.value)}
        />
        <ValidationMessage isInvalid={!validAge && age} message={"A idade deve ser um número entre 18 e 65 anos"}/>

        <Input
          content="Renda Mensal:"
          type="text"
          id="income"
          onChange={(e) => setIncome(e.target.value)}
        />
        <ValidationMessage isInvalid={!validIncome && income} message={"A renda deve ser um número maior que 0"}/>

        <Input
          content="Cidade:"
          type="text"
          id="city"
          onChange={(e) => setCity(e.target.value)}
        />
        <ValidationMessage isInvalid={!validCity && city} message={"Este campo não pode estar em branco"}/>

        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default RegisterForm;
