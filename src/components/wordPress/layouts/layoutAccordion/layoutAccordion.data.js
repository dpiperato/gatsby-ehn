import { graphql } from 'gatsby';

export const pageBuilderColumnAccordion = graphql`
  fragment pageBuilderColumnAccordion on WpPage_Pagebuilder_Sections_Columns_columns_Layout_Accordion {
    fieldGroupName
    groups {
      headline
      content
    }
  }
`;
