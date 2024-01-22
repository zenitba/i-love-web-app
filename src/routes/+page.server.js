import { gql } from 'graphql-request';
import { hygraph } from '$lib/utils/hygraph.js';

export async function load() {
  const query = gql`
    query MyQuery {
      kilians {
        image {
          url
        }
        title
        name
        description
        content {
          text
        }
      }
      valeries {
        image {
          url
        }
        title
        name
        description
        content {
          text
        }
      }
      aCcessibility {
        image {
          url
        }
        title
        name
        description
        content {
          text
        }
      }
    }
  `;

  return await hygraph.request(query)
}
