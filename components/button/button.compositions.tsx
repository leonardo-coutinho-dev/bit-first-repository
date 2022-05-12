import React from 'react';
import { Button } from './button';

import * as styled from './button.styles';

export interface ButtonProps {}

export const PrimaryButton = () => {
  return (
    <styled.ContainerDiv>
      <styled.PrimaryButtonLight text='Primary Button Light'/>
      <styled.PrimaryButtonDark text='Primary Button Dark'/>
    </styled.ContainerDiv>
  )
}

export const SecondaryButton = () => {
  return (
    <div>
      <Button text='Secondary Button Light'/>
      <Button text='Secondary Button Dark'/>
    </div>
  )
}

export const DangerButton = () => {
  return (
    <div>
      <Button text='Danger Button Light'/>
      <Button text='Danger Button Dark'/>
    </div>
  )
}

export const WarningButton = () => {
  return (
    <div>
      <Button text='Warning Button Light'/>
      <Button text='Warning Button Dark'/>
    </div>
  )
}

export const DeleteButton = () => {
  return (
    <div>
      <Button text='Delete Button Light'/>
      <Button text='Delete Button Dark'/>
    </div>
  )
}