import { stringify } from "query-string";
import React, { Fragment, useEffect } from "react";
import useFetch from "../../Hooks/useFetch";

import { getPaginator, limit } from "../../utils";
import ErrorMessage from "../ErrorMessge/ErrorMessage";
import Feed from "../Feed/Feed";
import Loading from "../Loading/Loading";
import Pagination from "../Pagination/Pagination";

const getApiUrl = ({ username, offset, isFavorites }) => {
  const params = isFavorites
    ? { limit, offset, favorited: username }
    : { limit, offset, author: username };
  return `/articles?${stringify(params)}`;
};

const UserArticles = ({ username, isFavorites, location, url }) => {
  const { offset, currentPage } = getPaginator(location.search);
  const apiUrl = getApiUrl({ username, offset, isFavorites });
  const [{ response, isLoading, error }, doFetch] = useFetch(apiUrl);

  useEffect(() => {
    doFetch();
  }, [doFetch, isFavorites, username]);

  return (
    <div>
      {isLoading && <Loading />}
      {error && <ErrorMessage />}
      {!isLoading && response && (
        <Fragment>
          <Feed articles={response.articles} />
          <Pagination
            total={response.articlesCount}
            limit={limit}
            url={url}
            currentPage={currentPage}
          />
        </Fragment>
      )}
    </div>
  );
};

export default UserArticles;
