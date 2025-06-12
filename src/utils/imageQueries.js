import { graphql } from 'gatsby';

/*
 * Reusable fluid image query fragments for GraphQL
 */
export const imageFluidSmall = graphql`
  fragment imageFluidSmall on File {
    childImageSharp {
      fluid(maxWidth: 320) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`;

export const imageFluidMedium = graphql`
  fragment imageFluidMedium on File {
    childImageSharp {
      fluid(maxWidth: 640) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`;

export const imageFluidLarge = graphql`
  fragment imageFluidLarge on File {
    childImageSharp {
      fluid(maxWidth: 1280) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`;

export const imageFluidExtraLarge = graphql`
  fragment imageFluidExtraLarge on File {
    childImageSharp {
      fluid(maxWidth: 1920) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`;
