import React from "react";

const TemplateList = ({ templates }) => {
  const { name, category, created, description, link } = templates;
  console.log("props", templates);
  return (
    <div className="template">
      <div className="card template-card">
        <div className="template-details">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>

        <div className="use-template">
          <a href={link}>Use Template</a>
        </div>
      </div>
    </div>
  );
};

export default TemplateList;
