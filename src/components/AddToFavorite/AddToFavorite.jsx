import classNames from "classnames";
import React from "react";
import useFetch from "../../Hooks/useFetch";

const AddToFavorite = ({ isFavorited, favoritesCount, articleSlug }) => {
  const apiUrl = `/articles/${articleSlug}/favorite`;
  const [{ response }, doFetch] = useFetch(apiUrl);
  const favoritesCountWithResponse = response
    ? response.article.favoritesCount
    : favoritesCount;
  const isFavoritedWithResponse = response
    ? response.article.favorited
    : isFavorited;

  const buttonClasses = classNames({
    "btn-sm": true,
    btn: true,
    "btn-primary": isFavoritedWithResponse,
    "btn-outline-primary": !isFavoritedWithResponse,
  });

  const handlerLike = (e) => {
    doFetch({
      method: isFavoritedWithResponse ? "delete" : "post",
    });
  };
  return (
    <button
      className={buttonClasses}
      onClick={handlerLike}
      style={{ outline: "none" }}
    >
      <i className="ion-heart"></i>
      <span>&nbsp; {favoritesCountWithResponse}</span>
    </button>
  );
};

export default AddToFavorite;
