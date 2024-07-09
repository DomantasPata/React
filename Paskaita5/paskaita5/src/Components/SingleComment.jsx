import React from "react";
import styles from "./SingleComment.module.css";
const SingleComment = (props) => {
  return (
    <div className={`${styles.border} ${styles.div}`}>
      <h4>
        <span>Name: </span>
        {props.product.name}
      </h4>
      <h4>
        <span>Email: </span>
        {props.product.email}
      </h4>
      <h4>
        <span>Comment: </span>
        {props.product.body}
      </h4>
    </div>
  );
};

export default SingleComment;
