import { useState, useEffect, RefObject } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { CommentQueryQuery } from 'types';

interface UtterancesConfig {
  src: string;
  repo: string;
  async: boolean;
  'issue-term': string;
  crossorigin: string;
  theme: string;
  label: string;
}

export const useUtterances = (
  ref: RefObject<HTMLElement | undefined>,
): { loading: boolean } => {
  const [loading, setLoading] = useState<boolean>(true);

  const data: CommentQueryQuery = useStaticQuery<CommentQueryQuery>(graphql`
    query CommentQuery {
      site {
        siteMetadata {
          repo
        }
      }
    }
  `);

  const { repo } = data.site.siteMetadata;

  useEffect(() => {
    const utterances = document.createElement('script');
    const utterancesConfig: UtterancesConfig = {
      src: 'https://utteranc.es/client.js',
      repo,
      'issue-term': 'pathname',
      label: 'comment',
      crossorigin: 'anonymous',
      theme: 'photon-dark',
      async: true,
    };

    Object.entries(utterancesConfig).forEach(([key, value]) => {
      utterances.setAttribute(key, value);
    });

    utterances.onload = (): void => setLoading(false);
    ref.current?.appendChild(utterances);
  }, [repo]);

  return { loading };
};
