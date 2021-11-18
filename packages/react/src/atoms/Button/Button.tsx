import React from "react";

interface buttonProps {
  label: string;
}

const Button: React.FC<buttonProps> = ({ label }: buttonProps) => {
  return <button>{label}</button>;
};

export default Button;
