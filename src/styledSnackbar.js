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

//snackbar를 굳이 사용안해도 되는 경우는 alert창을 커스텀할수 있을경우 혹은 다른 방식(modal)로 alert를 주는경우 
//해당 컴포넌트에서 style지정을 통해 사용자가 유지보수하기 
