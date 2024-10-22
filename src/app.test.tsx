import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Componente App", () => {
  beforeEach(() => localStorage.clear());
  const localStorageMock = (() => {
    let store = {};

    return {
      getItem: function (key) {
        return store[key] || null;
      },
      setItem: function (key, value) {
        store[key] = value.toString();
      },
      removeItem: function (key) {
        delete store[key];
      },
      clear: function() {
        store = {}
      }
    };
  })();

  Object.defineProperty(window, "localStorage", {
    value: localStorageMock,
  });

  it("Quando ja existe o resultado da query na memoria do navegador, o componente Result tem que ser carregado", () => {
    localStorageMock.setItem("authData", JSON.stringify({isApproved: true, max_ammount: 50}))
    render(<App />);
    const approved = screen.getByText("Aprovado");
    expect(approved).toBeInTheDocument()
  });
});
