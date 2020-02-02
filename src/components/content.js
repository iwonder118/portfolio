import React from "react";

export const Content = ({ children }) => (
  <div className="is-size-3 "
    style={{
      borderBottom: "1px solid white",
      marginBottom: "30px"
    }}
  >
    {children}
  </div>
);