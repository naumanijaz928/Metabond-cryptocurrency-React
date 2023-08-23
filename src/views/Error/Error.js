import React from "react";
import "./Error.css";
export default function Error() {
  return (
    <div className="errorBody">
      <section id="not-found">
        <div id="title"></div>
        <div className="circles">
          <p style={{ color: "black" }}>
            404
            <br />
            <small>
              PAGE NOT FOUND
              <br />
              <span style={{ wordBreak: "break-all" }}>
                it looks like the page you're looking for does not exist
              </span>
            </small>
          </p>
          <span className="circle big"></span>
          <span className="circle med"></span>
          <span className="circle small"></span>
        </div>
      </section>
    </div>
  );
}
