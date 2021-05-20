import React from "react";
import "./templates.scss";

const Templates = () => {
  return (
    <div className="wrap">
      <h6>Templates</h6>
      <div className="templates">
        {[1, 2, 3, 4, 5, 6].map((o, i) => {
          return (
            <div className="template" key={i}>
              <h5>Alumni Membership Form Template</h5>
              <p>
                Engage your alumni network better with this alumni registration
                form template. Embed this in your website ...
              </p>
              <span>Use Template</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Templates;
