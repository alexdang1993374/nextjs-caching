"use client";

import React from "react";
import { Button } from "react-bootstrap";

interface ErrorPageProps {
  error: Error;
  reset: VoidFunction;
}

const Error = ({ error, reset }: ErrorPageProps) => {
  return (
    <div>
      <h1>Something fucked up</h1>
      <Button onClick={reset}>Try again</Button>
    </div>
  );
};

export default Error;
