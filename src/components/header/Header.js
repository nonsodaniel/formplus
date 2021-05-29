import { connect } from "react-redux";
import * as actions from "../../store/actions/templateActions";
import "../../components/layouts/layout.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Header = (props) => {
  const dispatch = useDispatch();
  const select = useSelector((state) => state);

  const handleSearch = ({ target }) => {
    dispatch(actions.handleSearchTemplates(target.value));
    // props.handleSearchTemplates(e.target.value);
  };
  const sortCategory = ({ target }) => {
    dispatch(actions.handleSortCategory(target.value));
    // props.handleSortCategory(target.value);
  };
  const sortAlphabetically = ({ target }) => {
    dispatch(actions.handleSortAlphabet(target.value));
    // props.handleSortAlphabet(target.value);
  };
  const sortDate = ({ target }) => {
    dispatch(actions.handleSortDate(target.value));
    // props.handleSortDate(target.value);
  };

  return (
    <header className="header" data-test="header">
      <div className="header-wrap">
        <div className="search-input">
          <input
            type="text"
            className="form-tag search-textbox"
            data-test="search-field"
            placeholder="Search templates"
            value={props.searchValue}
            onChange={handleSearch}
          />
          <span className="search-icon">
            {" "}
            <i className="fas fa-search"></i>
          </span>
        </div>
        <div className="sort-row">
          <span className="sort-items sort-title">Sort By: </span>
          <div className="select-wrap sort-items">
            <select
              className="select-item"
              aria-label="select"
              onChange={sortCategory}
              data-test="sort-category"
            >
              <option defaultValue="All">All</option>
              <option value="Health">Health</option>
              <option value="E-commerce">E-commerce</option>
              <option value="Education">Education</option>
            </select>
          </div>
          <div className="select-wrap sort-items">
            <select
              className="select-item"
              aria-label="select"
              onChange={sortAlphabetically}
              data-test="sort-order"
            >
              <option defaultValue>Alphabet</option>
              <option value="default">Default</option>
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
          <div className="select-wrap sort-items">
            <select
              className="select-item"
              aria-label="select"
              onChange={sortDate}
              data-test="sort-date"
            >
              <option defaultValue>Date</option>
              <option value="default">Default</option>
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};

// const mapStateToProps = (state) => {
//   const { templates, loading, searchValue } = state.templates || {};
//   return {
//     templates,
//     loading,
//     searchValue,
//   };
// };
export default Header;
