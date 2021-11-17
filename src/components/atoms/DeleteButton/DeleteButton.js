import React from 'react';
// import from assets a icon and use as component in our styled button..
import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg';
// import styled component for our styled button
import { StyledButton } from 'components/atoms/DeleteButton/DeleteButton.styles';

const DeleteButton = (props) => (
  <StyledButton {...props}>
    <DeleteIcon />
  </StyledButton>
);

export default DeleteButton;
