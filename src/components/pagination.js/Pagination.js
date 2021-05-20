import React from "react";
import "./pagination.scss";

const Pagination = () => {
  return (
    <div className="pagination">
      <div className="pagination-wrap">
        <h6 className="pagination-text">Previous</h6>
        <span>
          <button className="page-btn">1</button> of 14{" "}
        </span>
        <h6 className="pagination-text">Next</h6>
      </div>
    </div>
  );
};

export default Pagination;
