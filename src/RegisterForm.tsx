import { useState } from "react";

function RegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    income: "",
    city: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados enviados", formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Idade:</label>
          <input
            type="text"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Renda Mensal:</label>
          <input
            type="text"
            name="income"
            value={formData.income}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Cidade:</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default RegisterForm;
