import React, { useEffect } from "react";

const FinancialAgreementForm = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://form.jotform.com/252174474223151/prefill/01988018a731793f932dd106b41700266c70";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <main style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Financial Agreement</h1>
      <p>Please review and complete the financial agreement below.</p>
      <div id="jotform-embed-container" />
    </main>
  );
};

export default FinancialAgreementForm;
