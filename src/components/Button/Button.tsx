import React, { ButtonHTMLAttributes, HTMLAttributes } from 'react';
import './Button.css';

type ButtonStyle = 'primary' | 'outline';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  variant?: ButtonStyle;
}

function Button({ children, onClick, variant = 'primary' }: ButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button onClick={handleClick} className={`btn btn-${variant}`}>
      {children}
    </button>
  );
}

export default Button;
