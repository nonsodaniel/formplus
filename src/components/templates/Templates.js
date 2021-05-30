import { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/templateActions";
import TemplateList from "./TemplateList";
import "./templates.scss";

const Templates = (props) => {
  useEffect(() => {
    props.getTemplates();
  }, [props.getTemplates]);
  const isDataLoaded = props.pageData && props.pageData.length > 0
  return (
    <div className="wrap">
      <h5 className="template-header">
        {props && props.currentCategory} Templates
      </h5>
      <div className={isDataLoaded  ? 'templates': 'no-templates' }>
        {
     props.errorMessage === 'Network Error' ? (
       <p className="text-center">{props.errorMessage}</p>
     ) : (
      !props.loading ? (
        isDataLoaded ? (
          props.pageData.map((template) => {
            return (
              <TemplateList
                key={Math.floor(Math.random() * Date.now())}
                templates={template}
              />
            );
          })
        ) : (
          <p className="text-center">No Data</p>
        )
      ) 
      : (
        <p className="text-center">Loading...</p>
      )
     )
        }
      
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { pageData, loading, currentCategory, errorMessage } = state.templates;
  return {
    pageData,
    loading,
    currentCategory,
    errorMessage
  };
};

export default connect(mapStateToProps, actions)(Templates);
