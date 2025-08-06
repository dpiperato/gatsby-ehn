import React, { useEffect, useState } from "react";
import Layout from "../components/layout/layout";
import SeoPress from "../components/wordPress/seoPress/seoPress";

const CCAuthorizationForm = () => {
  const [iframeSrc, setIframeSrc] = useState("https://form.jotform.com/252174732377057");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const sfId = urlParams.get("sf-id");

      if (sfId) {
        setIframeSrc(
          `https://form.jotform.com/252174732377057?sf-id=${encodeURIComponent(sfId)}`
        );
      }
    }
  }, []);

  return (
    <Layout>
      <SeoPress
        title="Credit Card Authorization Form"
        uri="/cc-authorization-form"
        seo={{ metaDesc: "Securely complete your credit card authorization form." }}
      />
      <section style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
        <h1>Credit Card Authorization</h1>
        <p>Please complete the credit card authorization form below.</p>
        <iframe
          title="Credit Card Authorization Form"
          src={iframeSrc}
          width="100%"
          height="1000"
          frameBorder="0"
          allowFullScreen
        />
        <div id="legitscripts" />
      </section>
    </Layout>
  );
};

export default CCAuthorizationForm;
