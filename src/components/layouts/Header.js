import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/templateActions";
import "./layout.css";

const Header = (props) => {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState([]);
  const [defaultData, setdefaultData] = useState([]);

  const searchName = () => {
    console.log(data, searchText);
    if (searchText === "") {
      return data;
    }
    let search = data.filter((filt) => {
      if (filt.name.toLowerCase().includes(searchText.toLowerCase())) {
        return filt;
      }
    });
    console.log(search);
  };

  const handleSearch = (e) => {
    setSearchText(e.target.value);
    searchName();
  };
  const sortCategory = ({ target }) => {
    //  let data = JSON.parse(localStorage.getItem('data')).splice(0,10)
    //  props.updateTemplates(data)
    let filt = data.map((o) => {
      if (o.category.includes(target.value)) {
        return o;
      }
    });
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
            className="form-tag"
            placeholder="Search templates"
            value={searchText}
            onChange={handleSearch}
          />
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
            onChange={sortName}
          >
            <option selected>Order</option>
            <option value="default">Default</option>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
          <select
            className="sort-items"
            aria-label="select"
            onChange={sortByTime}
          >
            <option selected>Order</option>
            <option value="1">Default</option>
            <option value="2">Ascending</option>
            <option value="3">Descending</option>
          </select>
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
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
