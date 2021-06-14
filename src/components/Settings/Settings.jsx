import React, { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/currentUser";
import useFetch from "../../Hooks/useFetch";
import useLocalStorage from "../../Hooks/useLocalStorage";
import BackendErrorMessage from "../BackendErrorMessage/BackendErrorMessage";

const Settings = () => {
  const [currentUserState, dispatch] = useContext(CurrentUserContext);
  const apiUrl = "/user";
  const [{ response, error }, doFetch] = useFetch(apiUrl);
  const [image, setImage] = useState("");
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSuccessfullUpdate, setIsSuccessfullUpdate] = useState(false);
  const [, setToken] = useLocalStorage("token");
  const [isSuccessfullLogout, setIsSuccessfullULogout] = useState(false);

  const handlerSubmit = (e) => {
    e.preventDefault();
    doFetch({
      method: "put",
      data: {
        user: {
          ...currentUserState.currentUser,
          image,
          username,
          bio,
          email,
          password,
        },
      },
    });
  };

  const logout = () => {
    setToken("");
    dispatch({ type: "LOGOUT" });
    setIsSuccessfullULogout(true);
  };

  useEffect(() => {
    if (!currentUserState.currentUser) {
      return;
    }
    currentUserState.currentUser.image &&
      setImage(currentUserState.currentUser.image);
    currentUserState.currentUser.username &&
      setUsername(currentUserState.currentUser.username);
    currentUserState.currentUser.bio &&
      setBio(currentUserState.currentUser.bio);
    currentUserState.currentUser.email &&
      setEmail(currentUserState.currentUser.email);
  }, [currentUserState.currentUser]);

  useEffect(() => {
    if (!response) {
      return;
    }
    dispatch({ type: "SET_AUTHORIZED", payload: response.user });
    setIsSuccessfullUpdate(true);
  }, [response, dispatch]);

  if (isSuccessfullUpdate ||isSuccessfullLogout ) {
    return <Redirect to="/" />;
  }


  return (
    <div className="settings-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Your settings</h1>
            {error && <BackendErrorMessage backendErrors={error.errors} />}
            <form onSubmit={handlerSubmit}>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="URL of profile picture"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <textarea
                    className="form-control form-control-lg"
                    rows="8"
                    placeholder="Short bio"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                  ></textarea>
                </fieldset>
                <fieldset className="form-group">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </fieldset>
                <button
                  type="submit"
                  className="btn btn-lg btn-primary pull-xs-right"
                >
                  Update settings
                </button>
              </fieldset>
            </form>
            <hr />
            <button className="btn btn-outline-danger" onClick={logout}>
              Click here to logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
