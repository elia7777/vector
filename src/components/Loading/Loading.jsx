import React from "react";
import PuffLoader from "react-spinners/PuffLoader";
import { css } from "@emotion/react";

const override = css`
  display: block;
  margin: 3rem auto;
  border-color: #506AD4;
`;
const color = "#506AD4";

const Loading = () => {
  return (
    <div>
      <PuffLoader css={override} size={60} color={color} />
    </div>
  );
};

export default Loading;
