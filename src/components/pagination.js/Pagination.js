import { connect } from "react-redux";
import * as actions from "../../store/actions/templateActions";
import "./pagination.scss";

const Pagination = (props) => {
  const prevBtn = () => {
    props.handlePrevBtn()

  };
  const nextBtn = () => {
    props.handleNextBtn()
  };
  return (
    <div className="pagination">
      {
        props.allTemplates.length > 0 && (
          <div className="pagination-wrap">
          <button className="pagination-text pointer" 
          disabled={  props.currentPage  === 1}
          onClick={prevBtn}>
            Previous
          </button>
          <span>
            <button className="page-btn">{props.currentPage}</button> of {props.totalPages}{" "}
          </span>
          <button className="pagination-text pointer"
          disabled={props.currentPage === props.totalpages}
          onClick={nextBtn}>
            Next
          </button>
        </div>
        )
      }
   
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log('tem', state)
  const { currentPage, totalPages, allTemplates } = state.templates;
  return {
    allTemplates,
    currentPage,
    totalPages,
  };
};
export default connect(mapStateToProps, actions)(Pagination);