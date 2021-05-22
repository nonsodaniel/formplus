import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/templateActions";
import "./layout.css";

const Header = (props) => {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState([]);
  const [defaultData, setdefaultData] = useState([]);

  const searchName = () => {
    if (searchText === "") {
      return data;
    }
     let search = data.filter((o) => o["name"].includes(searchText));
     setData(search);
  };

  const handleSearch = (e) => {
    setSearchText(e.target.value);
    searchName();
  };
  const sortCategory = ({ target }) => {
    if(target.value === 'All') return data
    let category = data.filter((o) => o["category"].includes(target.value));
    setData(category)
  };
  const sortName = ({ target }) => {
    let newData = [];
    // console.log(target.value, data);
    if (target.value === "asc") {
      newData = data.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return -1;
        }
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return 1;
        }
        return 0;
      });
      props.updateTemplates(newData);
      setData(newData);
    } else if (target.value === "desc") {
      newData = data.sort((a, b) => {
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return -1;
        }
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return 1;
        }
        return 0;
      });
      props.updateTemplates(newData);
      setData(newData);
    } else {
      setData(defaultData);
    }
  };
  const sortByTime = ({ target }) => {
    let newData = [];
    if (target.value === "asc") {
      newData = data.sort((x, y) => {
        return x.created - y.created;
      });
      setData(newData);
    } else if (target.value === "desc") {
      newData = data.sort((x, y) => {
        return y.created - x.created;
      });
      setData(newData);
    } else {
      setData(defaultData);
    }
    console.log(data);
  };

  useEffect(() => {
    let response = props.templateData;
    if (
      response &&
      response["status"] !== null &&
      response["status"] === 200 &&
      response["data"].length > 0
    ) {
      setData(response.data.splice(0, 50));
      setdefaultData(response.data.splice(0, 50));
    }
  }, [props.templateData]);

  useEffect(() => {
    setData(props.updateTemplateData);
  }, [props.updateTemplateData]);
  return (
    <header>
      <div className="header-wrap">
        <div className="search-input">
          <input
            type="text"
            className="form-tag search-textbox"
            placeholder="Search templates"
            value={searchText}
            onChange={handleSearch}
          />
          <span className="search-icon">         <i class="fas fa-search"></i></span>

        </div>
        <div className="sort-row">
          <span className="sort-items">Sort By: </span>
          <select
            className="sort-items"
            aria-label="select"
            onChange={sortCategory}
          >
            <option selected>All</option>
            <option defaultValue="Health">Health</option>
            <option defaultValue="E-commerce">E-commerce</option>
            <option defaultValue="Education">Education</option>
          </select>
          <select
            className="sort-items"
            aria-label="select"
            onChange={sortName}
          >
            <option selected>Order</option>
            <option defaultValue="default">Default</option>
            <option defaultValue="asc">Ascending</option>
            <option defaultValue="desc">Descending</option>
          </select>
          <select
            className="sort-items"
            aria-label="select"
            onChange={sortByTime}
          >
            <option selected>Order</option>
            <option defaultValue="1">Default</option>
            <option defaultValue="2">Ascending</option>
            <option defaultValue="3">Descending</option>
          </select>
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  console.log('state',state);
  const {
    templateData,
    loading,
    errorMessage,
    updateTemplateData,
  } = state.templates;
  return {
    templateData,
    loading,
    errorMessage,
    updateTemplateData,
  };
};
export default connect(mapStateToProps, actions)(Header);
