import styled, { css } from 'styled-components';
import { Button } from './button';

export const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PrimaryButtonLight = styled(Button)`
  padding: 4px;
  border: none;
  color: white;
  background: royalblue;
`;

export const PrimaryButtonDark = styled(Button)`
  margin-top: 4px;
  padding: 4px;
  border: 1px solid royalblue;
  color: royalblue;
  background: transparent;
`;