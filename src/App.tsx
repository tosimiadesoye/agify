import Home from "./components/Home";
import { useTranslation } from "react-i18next";
import "./i18n";
function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="App">
      <Home />
      <div className="mx-10 my-10 md:mx-40">
        <button
          className=" bg-transparent hover:bg-cyan-800 text-cyan-700 font-semibold hover:text-white py-2 px-4 border border-cyan-500 hover:border-transparent  rounded"
          onClick={() => changeLanguage("en")}
        >
          EN
        </button>
        <button
          className="bg-transparent hover:bg-cyan-800 text-cyan-700 font-semibold hover:text-white py-2 px-4 border border-cyan-500 hover:border-transparent rounded"
          onClick={() => changeLanguage("fr")}
        >
          FR
        </button>
      </div>
    </div>
  );
}

export default App;
