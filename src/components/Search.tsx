import { ChangeEvent } from "react";
import { SearchProps } from "../type";

const Search = ({ keyword, setKeyword, handleSubmit, t }: SearchProps) => {
  return (
    <div className="flex justify-center my-5">
      <input
        className="px-4 py-3 "
        type="name"
        name="name"
        value={keyword}
        placeholder="Enter your name"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setKeyword(e.target.value)
        }
      />
      <button
        onClick={handleSubmit}
        className="mx-5 bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded"
      >
        Submit
      </button>
    </div>
  );
};

export default Search;
