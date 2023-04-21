import { useState, useEffect } from "react";
import { getApiData } from "../dataSlice";
import Navigation from "../Navigation";
import { AppDispatch, RootState } from "../store";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import Search from "./Search";

function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const [keyword, setKeyword] = useState("");
  const data = useSelector((state: RootState) => {
    return state.data.data;
  });

  const { t } = useTranslation();

  const handleSubmit = () => {
    dispatch(getApiData(keyword));
    setKeyword("");
  };

  const getData = () => {
    try {
      dispatch(getApiData(keyword));
    } catch (error: any) {
      console.log(error);
    }
  };

  const displayUserData = () => {
    return (
      data &&
      data.map((item, index: number) => {
        if (item.name === "") return;

        return (
          <li className="my-2 p-5" key={index}>
            <span>
              <span className="bg-white p-1 md:p-4 rounded font-semibold ">
                {item.name}
              </span>{" "}
              {t("prediction")}{" "}
              <span className="bg-cyan-200 p-1 md:p-4 rounded font-semibold ">
                {item?.age}
              </span>
            </span>
          </li>
        );
      })
    );
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div>
        <Navigation />
      </div>

      <div>
        <div className="flex justify-center py-5">
          <div className="my-12">
            <div className="flex justify-center md:my-10 ">
              <h1 className="text-xl font-semibold ">{t("title")}</h1>
            </div>
            <div className="my-5 mx-12">
              <p>{t("p1")}</p>
              <p>{t("p2")}</p>
            </div>

            <Search
              keyword={keyword}
              setKeyword={setKeyword}
              handleSubmit={handleSubmit}
              t={t}
            />
          </div>
        </div>

        <div className="md:mx-10">
          <ul className="list-disc mx-40 ">{displayUserData()}</ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
