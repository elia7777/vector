import React, { useContext, useEffect, useState } from "react";
import useFetch from "../../Hooks/useFetch";
import { Redirect } from "react-router";
import ArticleForm from "../ArticleForm/ArticleForm";
import { CurrentUserContext } from "../../contexts/currentUser";

const EditArticle = ({ match }) => {
  const slug = match.params.slug;
  const apiUrl = `/articles/${slug}`;
  const [{ response: fetchArticleResponse }, doFetchArticle] = useFetch(apiUrl);
  const [
    { response: updateArticleResponse, error: updateArticleError },
    doUpdateArticle,
  ] = useFetch(apiUrl);
  const [initialValues, setInitialValues] = useState(null);
  const [isSeccuessfullSubmit, setIsSeccuessfullSubmit] = useState(false);
  const [currentUserState] = useContext(CurrentUserContext);

  const handlerSumbit = (article) => {
    doUpdateArticle({
      method: "put",
      data: {
        article,
      },
    });
  };

  useEffect(() => {
    doFetchArticle();
  }, [doFetchArticle]);

  useEffect(() => {
    if (!fetchArticleResponse) {
      return;
    }
    setInitialValues({
      title: fetchArticleResponse.article.title,
      body: fetchArticleResponse.article.body,
      description: fetchArticleResponse.article.description,
      tagList: fetchArticleResponse.article.tagList,
    });
  }, [fetchArticleResponse]);

  useEffect(() => {
    if (!updateArticleResponse) {
      return;
    }
    setIsSeccuessfullSubmit(true);
  }, [updateArticleResponse]);

  if (!currentUserState.isLoggedIn) {
    return <Redirect to="/" />;
  }

  if (isSeccuessfullSubmit) {
    return <Redirect to={`/articles/${slug}`} />;
  }

  return (
    <ArticleForm
      onSubmit={handlerSumbit}
      errors={updateArticleError && updateArticleError.errors}
      initialValues={initialValues}
    />
  );
};

export default EditArticle;
