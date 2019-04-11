import React from "react";

export const setColor = (str: string): JSX.Element => {
    if(str === 'true') {
      return <span style={{ color: "green" }}>{str.toString()}</span>;
    } else {
      return <span style={{ color: "red" }}>{str.toString()}</span>;
    }
  }

  