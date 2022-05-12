import React from 'react';
import { Button } from './button';

export interface ButtonProps {}

export const PrimaryButton = () => {
  return <Button text='Primary Button'/>
}

export const SecondaryButton = () => {
  return <Button text='Secondary Button'/>
}

export const DangerButton = () => {
  return <Button text='Danger Button'/>
}

export const WarningButton = () => {
  return <Button text='Warning Button'/>
}

export const DeleteButton = () => {
  return <Button text='Delete Button'/>
}