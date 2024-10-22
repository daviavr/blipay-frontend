import { render, screen } from "@testing-library/react";
import Register from "./Register";
const API_URL = "http://localhost:3000/mock";

describe("Componente Register", () => {
  const mockAuth = (value) => value
  it("Register tem que ser renderizado corretamente", () => {
    render(<Register
      API_URL={API_URL}
      setIsAuthenticated={mockAuth}
      expirationDelay={200}
    />);
    const element = screen.queryByText("Registro");
    expect(element).toBeInTheDocument();
  });
});

describe("", () => {
  const mockAuth = (value) => value
  it("Register tem que ser renderizado corretamente", () => {
    render(<Register
      API_URL={API_URL}
      setIsAuthenticated={mockAuth}
      expirationDelay={200}
    />);
    const element = screen.queryByText("Registro");
    expect(element).toBeInTheDocument();
  });
});