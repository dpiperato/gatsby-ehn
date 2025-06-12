import { graphql } from 'gatsby';

export const pageBuilderColumnMap = graphql`
  fragment pageBuilderColumnMap on WpPage_Pagebuilder_Sections_Columns_columns_Layout_Map {
    fieldGroupName
    height
    map {
      city
      country
      countryShort
      latitude
      longitude
      placeId
      postCode
      state
      stateShort
      streetAddress
      streetName
      streetNumber
      zoom
    }
  }
`;
