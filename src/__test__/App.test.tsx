import { render} from "@testing-library/react";
import App from "../App";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { Store, AnyAction } from "@reduxjs/toolkit";


jest.mock("../i18n", () => ({
  useTranslation: () => ({
    t: jest.fn(),
    i18n: {
      changeLanguage: jest.fn(),
    },
  }),
}));

describe("App", () => {
  const data = {
    data: {
      age: 18,
      count: 100,
      name: "Doe",
    },
  };
  const initialState = data;
  const mockStore = configureStore();
  let store: Store<unknown, AnyAction>;

  it("renders App component", () => {
    store = mockStore(initialState);
    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const enButton = getByText("EN");
    const frButton = getByText("FR");
    expect(enButton).toBeInTheDocument();
    expect(frButton).toBeInTheDocument();
  });

   it("calls changeLanguage with 'en' when EN button is clicked", async () => {
     render(
       <Provider store={store}>
         <App />
       </Provider>
     );
  
   });
});


