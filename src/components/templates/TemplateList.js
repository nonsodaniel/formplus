import { Link } from "react-router-dom";
const TemplateList = ({ templates }) => {
  const { name, description, link, created, category } = templates;
  return (
    <div className="template" key={created}>
      <div className="card template-card">
        <div className="template-details">
          <h3>{name}</h3>
          <h3>{category}</h3>
          <p>{description}</p>
          <p>{new Date(created).toLocaleString()}</p>
        </div>
        <div className="use-template">
          <Link to={link}>Use Template</Link>
        </div>
      </div>
    </div>
  );
};

export default TemplateList;
