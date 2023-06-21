import { Spinner } from "@/components/bootstrap";
import React from "react";

const Loading = () => {
  return (
    <div>
      <Spinner animation="border" className="d-block m-auto" />
    </div>
  );
};

export default Loading;
