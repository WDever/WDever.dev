import { useStaticQuery, graphql } from 'gatsby';
import { BioQueryQuery } from 'types';

export function useBioQuery(): BioQueryQuery {
  const data: BioQueryQuery = useStaticQuery<BioQueryQuery>(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.png/" }) {
        childImageSharp {
          fixed(width: 86, height: 86) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            instagram
            eMail
            gitHub
            blog
          }
        }
      }
    }
  `);

  return data;
}
