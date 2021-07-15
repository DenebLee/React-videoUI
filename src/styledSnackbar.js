import React from "react";

import styled from "styled-components";

const SnackbarStyled = styled.div`
  background-color: #808080;
  padding: 12px;
  border-radius: 30px;
  font-size:230px;
`;

export const Snackbar = ({ message, ...props }) => {
  return <SnackbarStyled>{message}</SnackbarStyled>;
};
