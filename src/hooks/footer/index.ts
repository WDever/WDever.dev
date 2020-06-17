import { useStaticQuery, graphql } from 'gatsby';
import { FooterQueryQuery } from 'types';

export function useFooterQuery(): string {
  const {
    site: {}
  } = useStaticQuery<FooterQueryQuery>(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);
}
