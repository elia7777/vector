import React, { useEffect } from "react";
import Feed from "../../components/Feed/Feed";
import useFetch from "../../Hooks/useFetch";
import Pagination from "../../components/Pagination/Pagination";
import { getPaginator } from "../../utils";
import { stringify } from "query-string";
import { limit } from "../../utils";
import PopularTags from "../../components/PooularTags/PopularTags";
import Loading from "../../components/Loading/Loading";
import ErrorMessage from "../../components/ErrorMessge/ErrorMessage";
import FeedToggler from "../../components/FeedToggler/FeedToggler";

const GlobalFeed = ({ location, match }) => {
  const { currentPage, offset } = getPaginator(location.search);
  const stringifiedParams = stringify({
    limit,
    offset,
  });
  const apiUrl = `/articles?${stringifiedParams}`;
  const [{ response, isLoading, error }, doFetch] = useFetch(apiUrl);
  const url = match.url;

  useEffect(() => {
    doFetch();
  }, [doFetch, currentPage]);

  return (
    <div className="home-page">
      <div className="banner">
        <div className="container">
          <h1>Vector</h1>
          <p>Read and share new perspectives on just about any topic. Everyone’s welcome.</p>
        </div>
      </div>
      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            <FeedToggler tagName="" />
            {isLoading && <Loading />}
            {error && <ErrorMessage />}
            {!isLoading && response && (
              <>
                <Feed articles={response.articles} />
                <Pagination
                  total={response.articlesCount}
                  limit={limit}
                  url={url}
                  currentPage={currentPage}
                />
              </>
            )}
          </div>
          <div className="col-md-3" style={{ marginTop: "38px" }}>
            <PopularTags />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalFeed;
