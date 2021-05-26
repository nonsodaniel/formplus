import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/templateActions";
import TemplateList from "./TemplateList";
import "./templates.scss";

const Templates = (props) => {

  useEffect(() => {
    props.getTemplates();
  }, [props.getTemplates]);

  
  return (
    <div className="wrap">
      <h5 className="template-header">All Templates</h5>
      <div className="templates">
        {!props.loading ? (
          props.pageData && props.pageData.length > 0 ? (
            props.pageData.map((o) => {
              return <TemplateList key={o.id} templates={o} />;
            })
          ) : (
            <p>No Data</p>
          )
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { pageData, loading } = state.templates;
  console.log(loading, pageData);
  return {
    pageData,
    loading,
  };
};

export default connect(mapStateToProps, actions)(Templates);
