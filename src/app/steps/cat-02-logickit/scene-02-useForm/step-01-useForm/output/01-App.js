import React from "react";

import ExampleForm from "./02-ExampleForm";

const initialValues = {
  email: "default@email.com"
};

export const App = () => {
  return <ExampleForm initialValues={initialValues} />;
};

export default App;
