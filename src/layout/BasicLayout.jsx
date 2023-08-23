import React from "react";
import classnames from "classnames";
export default function BasicLayout({ children, ...rest }) {
  return (
    <>
      <main
        className={classnames("w-100 vh-100 d-flex justify-content-center")}>
        {children}
      </main>
    </>
  );
}
