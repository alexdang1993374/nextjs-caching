import React from "react";

const HelloPage = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return <div>Hello</div>;
};

export default HelloPage;
