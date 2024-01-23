import { gql } from 'graphql-request';
import { hygraph } from '$lib/utils/hygraph.js';

export async function load() {
  const query = gql`
  query MyQuery {
    ischas {
      image {
        url
      }
      title
      name
      description
      content {
        markdown
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
        markdown
      }
    }
    tims {
      image {
        url
      }
      title
      name
      description
      content {
        markdown
      }
    }
    yolijns {
      image {
        url
      }
      title
      name
      description
      content {
        markdown
      }
    }
    julies {
      image {
        url
      }
      title
      name
      description
      content {
        markdown
      }
    }
    kilians {
      image {
        url
      }
      title
      name
      description
      content {
        markdown
      }
    }
  }
  `;

  return await hygraph.request(query)
}
