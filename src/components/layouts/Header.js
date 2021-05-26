import { connect } from "react-redux";
import * as actions from "../../store/actions/templateActions";
import "./layout.css";

const Header = (props) => {
  const handleSearch = (e) => {
    props.handleSearchTemplates(e.target.value);
  };
  const sortCategory = ({ target }) => {
    props.handleSortCategory(target.value);
  };
  const sortAlphabetically = ({ target }) => {
    props.handleSortAlphabet(target.value);
  };
 const sortDate = ({ target }) => {
   props.handleSortDate(target.value);
 };

  return (
    <header>
      <div className="header-wrap">
        <div className="search-input">
          <input
            type="text"
            className="form-tag search-textbox"
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

const mapStateToProps = (state) => {
  const { templates, loading, searchValue } = state.templates;
  return {
    templates,
    loading,
    searchValue,
  };
};
export default connect(mapStateToProps, actions)(Header);
