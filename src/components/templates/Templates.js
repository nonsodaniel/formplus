import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/templateActions";
import TemplateList from "./TemplateList";
import "./templates.scss";

const Templates = (props) => {

  useEffect(() => {
    props.getTemplates();
  }, []);

  
  return (
    <div className="wrap">
      <h5 className="template-header">All Templates</h5>
      <div className="templates">
        {!props.loading ? (
          props.data && props.data.length > 0 ? (
            props.data.map((o) => {
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
  const { data, loading, errorMessage, error } = state.templates;
  console.log(loading, data)
  return {
    data,
    error,
    loading,
    errorMessage,
  };
};

export default connect(mapStateToProps, actions)(Templates);
