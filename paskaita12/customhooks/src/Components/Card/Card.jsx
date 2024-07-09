import React from "react";

export function Card({ children, title }) {
  const childrenArray = React.Children.toArray(children);

  return (
    <div>
      <h1>{title}</h1>
      <div>{children}</div>
      <div>{childrenArray[0]}</div>
    </div>
  );
}

export function Header({ text }) {
  return (
    <>
      <h1>{text}</h1>
      <hr />
    </>
  );
}

Card.Header = Header;

export default Card;
