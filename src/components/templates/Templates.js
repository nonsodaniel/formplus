import React, { useEffect, useState } from "react";
// import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../store/actions/templateActions";
import TemplateList from "./TemplateList";
import "./templates.scss";

const Templates = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    return props.getTemplates();
  }, []);
  useEffect(() => {
    let response = props.templateData;
    if (
      response &&
      response["status"] !== null &&
      response["status"] === 200 &&
      response["data"].length > 0
    ) {
      setData(response["data"].splice(0, 50));
    }
  }, [props.templateData]);

  useEffect(() => {
    // console.log("props error", props.errorMessage);
  }, [props.errorMessage]);
  return (
    <div className="wrap">
      <h5 className="template-header">All Templates</h5>
      <div className="templates">
        {data && data.length > 0 ? (
          data.map((o) => {
            return <TemplateList key={o.id} templates={o} />;
          })
        ) : (
          <p>No Data</p>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { templateData, loading, errorMessage, error } = state.templates;
  return {
    templateData,
    loading,
    errorMessage,
  };
};
export default connect(mapStateToProps, actions)(Templates);