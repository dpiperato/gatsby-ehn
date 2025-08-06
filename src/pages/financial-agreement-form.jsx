import React, { useEffect, useState } from "react";
import Layout from "../components/layout/layout"; // Adjust path based on your file structure

const FinancialAgreementForm = () => {
  const [iframeSrc, setIframeSrc] = useState(
    "https://form.jotform.com/252174474223151/prefill/01988018a731793f932dd106b41700266c70"
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const sfId = urlParams.get("sf-id");

      if (sfId) {
        setIframeSrc(
          `https://form.jotform.com/252174474223151/prefill/01988018a731793f932dd106b41700266c70?sf-id=${encodeURIComponent(
            sfId
          )}`
        );
      }
    }
  }, []);

  return (
    <Layout>
      <section style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
        <h1>Financial Agreement</h1>
        <p>Please review and complete the financial agreement below.</p>
        <iframe
          title="Financial Agreement Form"
          src={iframeSrc}
          width="100%"
          height="1000"
          frameBorder="0"
          allowFullScreen
        />
        {/* Optional fallback div for LegitScript if needed */}
        <div id="legitscripts" />
      </section>
    </Layout>
  );
};

export default FinancialAgreementForm;


