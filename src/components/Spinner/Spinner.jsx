import React, { useContext } from "react";
import RingLoader from "react-spinners/RingLoader";
import { css } from "@emotion/react";
import { CurrentUserContext } from "../../contexts/currentUser";

const override = css`
  display: block;
  margin: 12rem auto;
  border-color: #506AD4;
`;
const color = "#506AD4";

const Spinner = ({ children }) => {
  const [currentUserState] = useContext(CurrentUserContext);

  if (currentUserState.isLoading) {
    return (
      <div>
        <RingLoader css={override} size={100} color={color} />
      </div>
    );
  }
  return children;
};

export default Spinner;
