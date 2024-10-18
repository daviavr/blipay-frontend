import './pages.css'

function Result({ data }) {
  const authJsonData = JSON.parse(data);
  let isApproved = authJsonData["isApproved"];
  let maxAmmount = authJsonData["max_ammount"];

  const component = isApproved ? (
    <div>
      <h1>Aprovado</h1>
      <h2>Valor a retirar: {maxAmmount}</h2>
    </div>
  ) : (
    <h1>Reprovado</h1>
  );

  return component;
}

export default Result;
