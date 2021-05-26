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
      <h5 className="template-header">
        {props && props.currentCategory} Templates
      </h5>
      <div className="templates">
        {!props.loading ? (
          props.pageData && props.pageData.length > 0 ? (
            props.pageData.map((o) => {
              return (
                (
                <TemplateList
   
                                key={Math.floor(Math.random() * Date.now())}
      
                             templates={o}
          
                     />
              )
              );
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
  const { pageData, loading, currentCategory } = state.templates;
  return {
    pageData,
    loading,
    currentCategory,
  };
};

export default connect(mapStateToProps, actions)(Templates);
