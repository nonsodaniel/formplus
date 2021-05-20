import React from "react";
import "./templates.scss";

const Templates = () => {
  return (
    <div className="wrap">
      <h5 className="template-header">All Templates</h5>
      <div className="templates">
    
          {[1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 3, 4,5 ].map((o, i) => {
          return (
            <div className="template" key={i}>
              <div className="card template-card">
                <div className="template-details">
                  <h3>Alumni Membership Form Template</h3>
                 <p>
                Engage your alumni network better with this alumni registration
                form template. Embed this in your website ...
                 </p>
                </div>
            
              <div className='use-template'>Use Template</div>
              </div>
            </div>
          );
        })}
      
      </div>
    </div>
  );
};

export default Templates;
