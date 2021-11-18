import React from "react";

interface buttonProps {
  label: string;
}

const Button: React.FC<buttonProps> = ({ label }: buttonProps) => {
  return <button className="dse-button-container">{label}</button>;
};

export default Button;
