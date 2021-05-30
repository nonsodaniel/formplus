import { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/templateActions";
import PropTypes from "prop-types";
import TemplateList from "./TemplateList";
import "./templates.scss";
import loadingImg from '../assets/loading.gif'
import networkImg from "../assets/no-connection.png";

const Templates = (props) => {
  let { getTemplates } = props;
  useEffect(() => {
    getTemplates();
  }, [getTemplates]);
  const isDataLoaded = props.pageData && props.pageData.length > 0
  let { errorMessage } = props;
  return (
    <div className="wrap" data-testid="templates-wrap">
      {isDataLoaded && (
        <h5 className="template-header">
          {props && props.currentCategory} Templates
        </h5>
      )}

      <div className={isDataLoaded ? "templates" : "no-templates"}>
        {errorMessage === "Network Error" ? (
          <div className="text-center network-error">
            <img src={networkImg} alt="Loading animation" height="150" />
            <p>Unable to connect to the Internet</p>
            <button
              className="btn-network__error pointer"
              onClick={() => window.location.reload()}
            >
              Refresh
            </button>
          </div>
        ) : !props.loading ? (
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
        ) : (
          <div className="text-center">
            <img src={loadingImg} alt="Loading animation" />
          </div>
        )}
      </div>
    </div>
  );
};

Templates.propTypes = {
  getTemplates: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
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
