import { render, screen } from "@testing-library/react";
import Result from "./Result";

describe("Componente Result", () => {
    it("Result tem que ser renderizado corretamente quando usuario esta autorizado", () => {
      const data = JSON.stringify({isApproved: true, max_ammount:200});
      render(<Result data={data}/> 
      );
      const component = screen.getByText("Aprovado");
      expect(component).toBeInTheDocument()
    });
    it("Result tem que ser renderizado corretamente quando usuario nao esta autorizado", () => {
      const data = JSON.stringify({isApproved: false, max_ammount:50});
      render(<Result data={data}/>) 
      const component = screen.getByText("Reprovado");
      expect(component).toBeInTheDocument()
    });
});