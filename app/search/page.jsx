"use client";

import "/styles/Search.css";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import SearchImg from "/public/icons/Search.svg";
import fetchQuery from "/components/fetching/fetchQuery";

const Search = () => {
  const [query, setQuery] = useState("");
  const [queryType, setQueryType] = useState("repository");

  const router = useRouter();

  const submit = async (e) => {
    if (typeof window !== "undefined") {
      e.preventDefault();
      const queryResult = await fetchQuery(query, queryType);
      sessionStorage.clear();
      sessionStorage.setItem("data", JSON.stringify(queryResult));
      sessionStorage.setItem("type", JSON.stringify(queryType));
      router.replace(`/results`);
    }
  };

  return (
    <div className="container">
      <form onSubmit={submit} className="search-form">
        <div className="search-row">
          <p className="search-label">Search:</p>
          <select
            className="search-type"
            value={queryType}
            onChange={(e) => setQueryType(e.target.value)}
          >
            <option className="option" value="repo">
              repository
            </option>
            <option className="option" value="user">
              user
            </option>
          </select>
        </div>
        <div className="input-row">
          <input
            type="search"
            className="search-input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" className="search-button">
            <Image
              src={SearchImg}
              alt="search button icon"
              className="search-button-image"
              loading="lazy"
            />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
