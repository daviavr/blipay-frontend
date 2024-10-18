import './pages.css'

function LandingPage({ data }) {
  const authJsonData = JSON.parse(data);
  let isApproved = authJsonData["isApproved"];
  let maxAmmount = authJsonData["max_ammount"];
  if (isApproved) {
    console.log("aiaiai");
  }

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

export default LandingPage;
