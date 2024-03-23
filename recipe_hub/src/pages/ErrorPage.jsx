import React from "react";
import Header from "../fragments/Header";

export default function ErrorPage() {
  return (
    <div className="App">
      <Header />
      <h1>Error page not found</h1>
      <div>
        {`I'm so sorry but I lost the page you were looking for. Please try
          again. written by copilot`}
      </div>
    </div>
  );
}
