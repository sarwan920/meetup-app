import { ApolloClient, InMemoryCache } from "@apollo/client";
import { gql } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://meetups.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
  headers: {
    "X-Hasura-Admin-Secret":
      "67R7APMOV8ZPcozMgLePtZhaD2tx5lp7ZbKsOjEpNwvp9qsZy1a0505PCObp9Dit",
  },
});

export const GET_MEETUPS = gql`
  query get_meetups {
    meetups(order_by:{ meetup_id:desc }) {
      meetup_id
      meetup_title
      meetup_image
      meetup_address
      meetup_description
    }
  }
`;

export const ADD_MEETUP = gql`
  mutation add_meetup(
    $title: String!
    $image: String!
    $address: String!
    $description: String!
  ) {
    insert_meetups(
      objects: {
        meetup_title: $title
        meetup_image: $image
        meetup_address: $address
        meetup_description: $description
      }
    ) {
      returning {
        meetup_id
      }
    }
  }
`;

export default client;
