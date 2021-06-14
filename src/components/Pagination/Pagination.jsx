import React from "react";
import { range } from "../../utils";
import { Link } from "react-router-dom";
import classNames from "classnames";

const PagintationItem = ({ page, currentPage, url }) => {
  const liClasses = classNames({
    "page-item": true,
    active: currentPage === page,
  });

  return (
    <li
      className={liClasses}
      style={{
        display: "inline-block",
        margin: "-0.01rem",
      }}
    >
      <Link
        to={`${url}?page=${page}`}
        className="page-link"
        style={{
          display: "inline-block",
          width: "2.5rem",
          textAlign: "center",
        }}
      >
        {page}
      </Link>
    </li>
  );
};

const Pagination = ({ total, limit, url, currentPage }) => {
  const pagesCount = Math.ceil(total / limit);
  const pages = range(1, pagesCount);

  return (
    <ul className="pagination">
      {pages.map((page) => (
        <PagintationItem
          page={page}
          currentPage={currentPage}
          url={url}
          key={page}
        />
      ))}
    </ul>
  );
};

export default Pagination;
