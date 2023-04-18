import { render, fireEvent } from "@testing-library/react";
import Search from "../components/Search";

describe("Search", () => {
  it("should call handleSubmit with the entered keyword when submit button is clicked", () => {
    const handleSubmitMock = jest.fn();
    const setKeywordMock = jest.fn();
    const tMock = jest.fn();
    const keyword = "John";

    const { getByPlaceholderText, getByText } = render(
      <Search
        keyword={keyword}
        setKeyword={setKeywordMock}
        handleSubmit={handleSubmitMock}
        t={tMock}
      />
    );

    const inputElement = getByPlaceholderText("Enter your name");
    const submitButton = getByText("Submit");

    fireEvent.change(inputElement, { target: { value: "Dan" } });
    fireEvent.click(submitButton);

    expect(setKeywordMock).toHaveBeenCalledTimes(1);
    expect(setKeywordMock).toHaveBeenCalledWith("Dan");
    expect(handleSubmitMock).toHaveBeenCalledTimes(1);
  });
});
