import { render, screen, fireEvent } from "@testing-library/react";
import Result from "./Result";

describe("Componente Result", () => {
    const data = JSON.stringify({isApproved: true, max_ammount:200});
    it("Result tem que ser renderizado corretamente", () => {
      render(<Result data={data}/> 
      );
      const component = screen.getAllByRole("heading");
      expect(component).toBeInTheDocument()
    });
});