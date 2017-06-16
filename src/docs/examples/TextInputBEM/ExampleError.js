import React from "react";
import TextInputBEM from "ps-react/TextInputBEM";

const ExampleOptional = () => {
  return (
    <TextInputBEM
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
