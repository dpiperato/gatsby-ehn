import React from 'react';
import { LocalBusiness } from 'schema-dts';
import { helmetJsonLdProp } from "react-schemaorg"

// See https://github.com/google/react-schemaorg#react-helmet-usage
// for implementation
const LocalBusinessSchema = () => {
  return (
    helmetJsonLdProp<LocalBusiness>({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      additionalType: "http://www.productontology.org/doc/Drug_rehabilitation",
      url: "https://www.cleanandsoberdetox.com/",
      logo: "https://www.cleanandsoberdetox.com/wp-content/themes/clean-sober-sage/dist/images/clean-and-sober-detox-logo.svg",
      hasMap: "https://www.google.com/maps/place/Clean+and+Sober+Detox/@38.6635859,-121.222051,15z/data=!4m5!3m4!1s0x0:0xfa33374f5e72e980!8m2!3d38.6635859!4d-121.222051",
      address: {
        "@type": "PostalAddress",
        streetAddress: "8946 Madison Avenue",
        addressLocality: "Fair Oaks",
        addressRegion: "CA",
        postalCode: "95628",
      },
      image: "https://www.cleanandsoberdetox.com/what-to-expect/detox-sacramento-3/",
      description: "Start your new life now at Clean and Sober Detox in Sacramento California! Our addiction treatment center provide detox treatment and sober living that helps individual prepare for a lifestyle of recovery. We provide the crucial first step toward freedom from addiction by providing highly personalized Detox Treatments in Fair Oaks, CA.",
      name: "Clean and Sober Detox",
      priceRange: "$$$$",
      telephone: "+1 916-347-4313",
      email: "info@cleanandsoberdetox.com",
      openingHours: "Open 24 hours",
      geo: {
        "@type": "GeoCoordinates",
        latitude: "38.6635859",
        longitude: "-121.222051"
      },
      sameAs: [
        "https://www.detox.net/providers/clean-and-sober-detox-3255320921/",
        "https://www.recovery.org/providers/clean-and-sober-detox-3255320921/",
        "https://www.sprouthealthgroup.com/facilities/clean-and-sober-detox/"
      ],
    })
  );
};

export default LocalBusinessSchema;