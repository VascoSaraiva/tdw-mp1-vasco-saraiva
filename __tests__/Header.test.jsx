import { render, screen } from "@testing-library/react";
import Header from "../components/header";

test('Should have the word "Blog" in the component', () => {
  render(<Header />); //Arrange
  const myElement = screen.getByText("Blog"); //Act
  expect(myElement).toBeInTheDocument(); //Assert
});

