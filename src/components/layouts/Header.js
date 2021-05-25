import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/templateActions";
import "./layout.css";

const Header = (props) => {
  const handleSearch = (e) => {
    props.handleSearchTemplates(e.target.value);
  };
  const sortCategory = ({   target   }) => {
     console.log(target.value)
    props.handleSortCategory(target.value);
  };
  const sortAlphabetically = ({   target   }) => {
    console.log(target.value)
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
            <i class="fas fa-search"></i>
          </span>
        </div>
        <div className="sort-row">
          <span className="sort-items">Sort By: </span>
          <select
            className="sort-items"
            aria-label="select"
            onChange={sortCategory}
          >
            <option selected>All</option>
            <option value="Health">Health</option>
            <option value="E-commerce">E-commerce</option>
            <option value="Education">Education</option>
          </select>
          <select
            className="sort-items"
            aria-label="select"
            onChange={sortAlphabetically}
          >
            <option selected>Alphabet</option>
            <option value="default">Default</option>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
          <select
            className="sort-items"
            aria-label="select"
            onChange={sortDate}
          >
            <option selected>Date</option>
            <option value="default">Default</option>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  console.log('state',state)
  const { templates, loading, searchValue } = state.templates;
  return {
    templates,
    loading,
    searchValue,
  };
};
export default connect(mapStateToProps, actions)(Header);
