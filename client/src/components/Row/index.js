import React from "react";

const styles = {
  sectionStyles: {
    background: "green",
    border: "1px solid",
    width: "100%",
  }
};

const Row = props =>
  <div style={styles.sectionStyles} className={`row${props.fluid ? "-fluid" : ""}`}>
    {props.children}
  </div>;

export default Row;
