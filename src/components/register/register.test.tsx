import { render, screen, fireEvent } from "@testing-library/react";
import Register from "./Register";
const API_URL = "http://localhost:3000/mock";
const delay = 1800

describe("Componente Register", () => {
  const mockAuth = (value) => value;
  it("Register tem que ser renderizado corretamente", () => {
    render(
      <Register
        API_URL={API_URL}
        setIsAuthenticated={mockAuth}
        expirationDelay={delay}
      />
    );
    const element = screen.queryByText("Registro");
    expect(element).toBeInTheDocument();
  });

  it("Componentes do register sendo renderizador", () => {
    render(
      <Register
        API_URL={API_URL}
        setIsAuthenticated={mockAuth}
        expirationDelay={delay}
      />
    );
    const nameField = screen.queryByText("Nome:");
    const ageField = screen.queryByText("Idade:");
    const incomeField = screen.queryByText("Renda:");
    const cityField = screen.queryByText("Cidade:");
    expect(nameField).toBeInTheDocument();
    expect(ageField).toBeInTheDocument();
    expect(incomeField).toBeInTheDocument();
    expect(cityField).toBeInTheDocument();
  });

  it("Deve mostrar mensagem de erro quando os campo estao preenchidos com dados invalidos", () => {
    const {container} = render(
      <Register
        API_URL={API_URL}
        setIsAuthenticated={mockAuth}
        expirationDelay={delay}
      />
    );
    const nameField = container.querySelector("#user");
    const ageField = container.querySelector("#age");
    const incomeField = container.querySelector("#income");
    const cityField = container.querySelector("#city");

    fireEvent.change(nameField, { target: { value: 'nome' }});
    fireEvent.change(ageField, { target: { value: 10 }});
    fireEvent.change(incomeField, { target: { value: 0 }});
    fireEvent.change(cityField, { target: { value: ' ' }});

    const nameError = screen.getByText("O nome precisa ter no mínimo 8 caracteres");
    const ageError = screen.getByText("A idade deve ser um número entre 18 e 65 anos");
    const incomeError =screen.getByText("A renda deve ser um número maior que 0");
    const cityError =screen.getByText("Este campo não pode estar em branco"); 

    expect(nameError.className).toEqual("validation");
    expect(ageError.className).toEqual("validation");
    expect(incomeError.className).toEqual("validation");
    expect(cityError.className).toEqual("validation");
  });
    it("Mensagem de erro nao deve aparecer quando os dados sao validos", () => {
    const {container} = render(
      <Register
        API_URL={API_URL}
        setIsAuthenticated={mockAuth}
        expirationDelay={delay}
      />
    );
    const nameField = container.querySelector("#user");
    const ageField = container.querySelector("#age");
    const incomeField = container.querySelector("#income");
    const cityField = container.querySelector("#city");

    fireEvent.change(nameField, { target: { value: 'Nome Com mais de 8 digitos' }});
    fireEvent.change(ageField, { target: { value: 19 }});
    fireEvent.change(incomeField, { target: { value: 100 }});
    fireEvent.change(cityField, { target: { value: 'Cidade' }});

    const nameError = screen.getByText("O nome precisa ter no mínimo 8 caracteres");
    const ageError = screen.getByText("A idade deve ser um número entre 18 e 65 anos");
    const incomeError =screen.getByText("A renda deve ser um número maior que 0");
    const cityError =screen.getByText("Este campo não pode estar em branco"); 

    expect(nameError.className).toEqual("offscreen");
    expect(ageError.className).toEqual("offscreen");
    expect(incomeError.className).toEqual("offscreen");
    expect(cityError.className).toEqual("offscreen");
  }); 
});
