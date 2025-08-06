import React, { useEffect } from "react";

const CCAuthorizationForm = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://form.jotform.com/jsform/252174732377057";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <main style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Credit Card Authorization</h1>
      <p>Please complete the credit card authorization form below.</p>
      <div id="jotform-embed-container" />
    </main>
  );
};

export default CCAuthorizationForm;
