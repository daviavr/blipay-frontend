import { render, screen } from "@testing-library/react";
import Register from "./Register";

describe("Component Register", () => {
  const API_URL = "http://localhost:3000/mock";
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