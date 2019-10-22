import React from "react";

import { Button, Card } from "antd";
const LineItem = ({ field, value }) => (
  <h3>
    <strong>{field}:</strong>
    {value || ""}
  </h3>
);

const RegistrationConfComponent = ({ onSubmit, softUser }) => {
  return (
    <div className="app__login">
      <Card title="Confirm Registration">
        <LineItem {...{ field: "Username", value: softUser.username }} />
        <LineItem {...{ field: "Email", value: softUser.email }} />
        <Button type="primary" onClick={() => onSubmit(softUser)}>
          Submit
        </Button>
      </Card>
    </div>
  );
};

export default RegistrationConfComponent;
