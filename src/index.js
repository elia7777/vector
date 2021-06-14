import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import CurrentUserChecker from "./components/currentUserChecker/currentUserChecker";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import Spinner from "./components/Spinner/Spinner";
import { CurrentUserProvider } from "./contexts/currentUser";
import "./main.css";
import Routes from "./routes";

const App = () => {
  return (
    <CurrentUserProvider>
      <CurrentUserChecker>
        <Router basename="/vector">
          <Spinner>
            <NavBar />
            <Routes />
            <Footer />
          </Spinner>
        </Router>
      </CurrentUserChecker>
    </CurrentUserProvider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
