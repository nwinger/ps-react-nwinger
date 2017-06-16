import React from "react";
import TextInputCSSModules from "ps-react/TextInputCSSModules";

const ExampleOptional = () => {
  return (
    <TextInputCSSModules
      htmlId="example-optional"
      label="First Name"
      name="firstname"
      onChange={() => {}}
      required
      error="First name is required"
    />
  );
};

export default ExampleOptional;
