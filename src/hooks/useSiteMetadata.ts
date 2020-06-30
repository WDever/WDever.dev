import { useStaticQuery, graphql } from 'gatsby';
import { SiteMetadataQuery } from 'types';

export function useSiteMetadata(): {
  siteMetadata: SiteMetadataQuery['site']['siteMetadata'];
  childImageSharp: SiteMetadataQuery['avatar']['childImageSharp'];
} {
  const {
    site: { siteMetadata },
    avatar: { childImageSharp },
  }: SiteMetadataQuery = useStaticQuery<SiteMetadataQuery>(graphql`
    query SiteMetadata {
      avatar: file(absolutePath: { regex: "/profile-pic.png/" }) {
        childImageSharp {
          fixed(width: 86, height: 86) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          title
          description
          author
          name
          authorDescription
          social {
            instagram
            eMail
            gitHub
            blog
            buyMeACoffee
          }
        }
      }
    }
  `);

  return { siteMetadata, childImageSharp };
}
