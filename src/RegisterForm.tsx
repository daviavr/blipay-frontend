import { useState, useEffect } from "react";

function RegisterForm() {
  const expireDelay = 180000;

  const [user, setUser] = useState("");
  const [validUser, setValidUser] = useState(false);
  useEffect(() => {
    user.length >= 8 ? setValidUser(true) : setValidUser(false);
  }, [user]);

  const [age, setAge] = useState(NaN);
  const [validAge, setValidAge] = useState(false);
  useEffect(() => {
    age >= 18 && age <= 65 ? setValidAge(true) : setValidAge(false);
  }, [age]);

  const [income, setIncome] = useState(NaN);
  const [validIncome, setValidIncome] = useState(false);
  useEffect(() => {
    income > 0 ? setValidIncome(true) : setValidIncome(false);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const authData = {
      expiredTime: new Date().getMilliseconds() + expireDelay,
      max_ammount: income * 10,
      isAuthenticated: true,
    };

    localStorage.setItem("authenticatedUser", JSON.stringify(authData));
    console.log(user, age, income, city);
  };

  return (
    <section>
      <p className={errMsg != "" ? "" : "offscreen"}>
        O nome precisa ter no mínimo 8 caracteres
      </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="user">Nome:</label>
        <input
          type="text"
          id="user"
          autoComplete="off"
          onChange={(e) => setUser(e.target.value)}
          required
        />
        <p className={!validUser && user ? "" : "offscreen"}>
          O nome precisa ter no mínimo 8 caracteres
        </p>

        <label htmlFor="age">Idade:</label>
        <input
          type="text"
          id="age"
          autoComplete="off"
          onChange={(e) => setAge(Number(e.target.value))}
          value={!isNaN(age) ? age : ""}
          required
        />
        <p className={!validAge && age ? "" : "offscreen"}>
          A idade deve estar entre 18 e 65 anos
        </p>

        <label htmlFor="income">Renda Mensal:</label>
        <input
          type="text"
          id="income"
          autoComplete="off"
          onChange={(e) => setIncome(Number(e.target.value))}
          value={!isNaN(income) ? income : ""}
          required
        />
        <p className={!validIncome && income ? "" : "offscreen"}>
          A renda mensal deve ser maior que 0
        </p>

        <label htmlFor="city">Cidade:</label>
        <input
          type="text"
          id="city"
          autoComplete="off"
          onChange={(e) => setCity(e.target.value)}
          required
        />
        <p className={!validCity && city ? "" : "offscreen"}>
          Este campo não pode estar em branco
        </p>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default RegisterForm;
