import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const TemplateList = ({ templates }) => {
  const { name, description, link, created } = templates;
  return (
    <div className="template" key={created}>
      <div className="card template-card">
        <div className="template-details">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
        <div className="use-template">
          <Link to='#' 
          onClick={(e) => {
            e.preventDefault();
            window.open(link)
          }}>Use Template</Link>
        </div>
      </div>
    </div>
  );
};

TemplateList.propTypes = {
  templates: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired,
  }),
};

export default TemplateList;

