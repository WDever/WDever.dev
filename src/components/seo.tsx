import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet';
import { useSiteMetadata } from 'hooks';

interface Props {
  description?: string;
  lang?: string;
  meta?: [];
  title: string;
}

export default function SEO({
  description = '',
  lang = 'en',
  meta = [],
  title,
}: Props): ReactElement {
  const { siteMetadata } = useSiteMetadata();

  const metaDescription = description || siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
      link={[
        {
          href: '//cdn.jsdelivr.net/npm/hack-font@3.3.0/build/web/hack.css',
          rel: 'stylesheet',
          type: 'text/css',
        },
        {
          href:
            'https://fonts.googleapis.com/css2?family=Fira+Code:wght@500;600;700&display=swap',
          rel: 'stylesheet',
          type: 'text/css',
        },
      ]}
    />
  );
}
