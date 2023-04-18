import { render, fireEvent } from "@testing-library/react";
import { useSelector, useDispatch } from "react-redux";
import Home from "../components/Home";


jest.mock("../Navigation", () => ({
  __esModule: true,
  default: jest.fn(() => <div data-testid="navigation-component" />),
}));

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe("Home component", () => {
  test("renders Navigation component", () => {
    const { getByTestId } = render(<Home />);

    expect(getByTestId("navigation-component")).toBeInTheDocument();
  });

  beforeEach(() => {
    (useSelector as any).mockReturnValue([]);
    (useDispatch as any).mockReturnValue(jest.fn());
  });

  afterEach(() => {
    (useSelector as any).mockClear();
    (useDispatch as any).mockClear();
  });

  test("renders the component with correct content", () => {
    const { getByText } = render(<Home />);

    // Assert that the component renders with the correct text content
    expect(getByText("title")).toBeInTheDocument();
    expect(getByText("p1")).toBeInTheDocument();
    expect(getByText("p2")).toBeInTheDocument();
  });

  test("dispatches postApiData action on form submission", () => {
    const dispatchMock = jest.fn();
    (useDispatch as any).mockReturnValue(dispatchMock);

    const { getByRole } = render(<Home />);

    const inputElement = getByRole("textbox");
    const submitButtonElement = getByRole("button");

    // Simulate user typing in the input field
    fireEvent.change(inputElement, { target: { value: "John" } });

    // Simulate user clicking the submit button
    fireEvent.click(submitButtonElement);

  });
});
