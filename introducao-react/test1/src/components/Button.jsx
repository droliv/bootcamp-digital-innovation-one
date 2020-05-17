import React from 'react';

const Button = (props) => {
  const { name, action } = props;

  return <button onClick={action}>{name}</button>;
};

export default Button;
