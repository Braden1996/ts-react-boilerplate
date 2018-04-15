import * as React from 'react';

interface IButtonProps {children: string}

export default function Button({children}: IButtonProps) {
  return <button>{children}</button>;
}
