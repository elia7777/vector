import React, { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/currentUser";
import useFetch from "../../Hooks/useFetch";
import ArticleForm from "../ArticleForm/ArticleForm";
import Loading from "../Loading/Loading";

const CreateArticle = () => {
  const [currentUserState] = useContext(CurrentUserContext);
  const apiUrl = "/articles";
  const [{ response, error }, doFetch] = useFetch(apiUrl);

  const initialValues = {
    title: "",
    body: "",
    description: "",
    tagList: [],
  };
  const [isSeccuessfullSubmit, setIsSeccuessfullSubmit] = useState(false);
  const [isLoadingPost, setIsLoadingPost] = useState(false);

  const handlerSumbit = (article) => {
    setIsLoadingPost(true);
    doFetch({
      method: "post",
      data: {
        article,
      },
    });
  };

  useEffect(() => {
    if (!response) {
      return;
    }
    setIsLoadingPost(false);
    setIsSeccuessfullSubmit(true);
  }, [response]);

  if (!currentUserState.isLoggedIn) {
    return <Redirect to="/" />;
  }

  if (isLoadingPost) {
    <Loading />;
  }
  if (isSeccuessfullSubmit) {
    return <Redirect to={`/articles/${response.article.slug}`} />;
  }

  return (
    <div>
      <ArticleForm
        errors={(error && error.errors) || {}}
        initialValues={initialValues}
        onSubmit={handlerSumbit}
      />
    </div>
  );
};

export default CreateArticle;
