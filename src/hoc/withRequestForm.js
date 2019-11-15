import React from "react";

function withRequestForm(Component) {
  const EnhancedComponentWithForm = () => {
    return <Component />;
  };

  return EnhancedComponentWithForm;
}

export default withRequestForm;
