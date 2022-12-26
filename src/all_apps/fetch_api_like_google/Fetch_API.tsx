import React, { useState, useEffect } from "react";
import { data } from "./interfaces_types/interfaces";
import "./stylesFile/style.css";

const Fetch_API = () => {
  const initialState: data[] = [];

  const [data, setData] = useState(initialState);
  const [todosPerPage, setTodosPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const numOfTotalPages = Math.ceil(data.length / todosPerPage);
  let pages = [...Array(numOfTotalPages + 1).keys()].slice(1);

  const indexOfLastPage = currentPage * todosPerPage;
  const indexOfFirstPage = indexOfLastPage - todosPerPage;
  const visiblePage = data.slice(indexOfFirstPage, indexOfLastPage);
  const URL = "https://jsonplaceholder.typicode.com/comments";

  return (
    <>
      <select
        name="select Number of Pages"
        id="selecttotopage"
        onClick={(e) => setTodosPerPage((e as any).target?.value)}
      >
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
        <option value="40">40</option>
        <option value="50">50</option>
      </select>
      <div className="fetch_main">
        <div>
          {visiblePage.map((elem, ind) => {
            return (
              <p key={elem.id}>
                {ind + 1} {elem.name}
              </p>
            );
          })}
        </div>

        <span
          className="prev_next"
          onClick={() => currentPage !== 1 && setCurrentPage(currentPage - 1)}
        >
          Prev
        </span>
        <div className="pages">
          `
          {pages.map((elem) => {
            return (
              <p>
                <span
                  onClick={() => setCurrentPage(elem)}
                  className={`${
                    currentPage === elem ? "clicked" : "none"
                  } pages-nums`}
                  key={elem}
                >
                  {`${elem} |  `}
                </span>
              </p>
            );
          })}
        </div>
        <span
          className="prev_next"
          onClick={() =>
            currentPage !== numOfTotalPages && setCurrentPage(currentPage + 1)
          }
        >
          Next
        </span>
      </div>
    </>
  );
};

export default Fetch_API;
