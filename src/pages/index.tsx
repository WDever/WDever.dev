import React, { ReactElement } from 'react';
import { Link, graphql } from 'gatsby';

import Bio from '../components/bio';
import Layout from '../components/layout/layout.component';
import SEO from '../components/seo';
import { rhythm } from '../utils/typography';
import { BlogIndexQueryQuery } from '../types/graphqlTypes';

interface Edge {
  node: {
    excerpt: string;
    fields: {
      slug: string;
    };
    frontmatter: {
      date: string;
      title: string;
      description: string;
    };
  };
}

interface BlogIndexProps {
  data: BlogIndexQueryQuery;
  location: Location;
}

export default function BlogIndex({
  data,
  location,
}: BlogIndexProps): ReactElement {
  const siteTitle: BlogIndexQueryQuery['site']['siteMetadata']['title'] =
    data.site.siteMetadata.title;
  const posts: BlogIndexQueryQuery['allMarkdownRemark']['edges'] =
    data.allMarkdownRemark.edges;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title='All posts' />
      <Bio />
      {posts.map(
        ({
          node,
        }: {
          node: BlogIndexQueryQuery['allMarkdownRemark']['edges'][number]['node'];
        }) => {
          const title = node.frontmatter.title || node.fields.slug;
          return (
            <article key={node.fields.slug}>
              <header>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                <small>{node.frontmatter.date}</small>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </section>
            </article>
          );
        },
      )}
    </Layout>
  );
}

// class BlogIndex extends React.Component {
//   render() {
//     const { data } = this.props;
//     const siteTitle = data.site.siteMetadata.title;
//     const posts = data.allMarkdownRemark.edges;

//     console.log(data);

//     return (
//       <Layout location={this.props.location} title={siteTitle}>
//         <SEO title="All posts" />
//         <Bio />
//         {posts.map(({ node }) => {
//           const title = node.frontmatter.title || node.fields.slug;
//           return (
//             <article key={node.fields.slug}>
//               <header>
//                 <h3
//                   style={{
//                     marginBottom: rhythm(1 / 4),
//                   }}
//                 >
//                   <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
//                     {title}
//                   </Link>
//                 </h3>
//                 <small>{node.frontmatter.date}</small>
//               </header>
//               <section>
//                 <p
//                   dangerouslySetInnerHTML={{
//                     __html: node.frontmatter.description || node.excerpt,
//                   }}
//                 />
//               </section>
//             </article>
//           );
//         })}
//       </Layout>
//     );
//   }
// }

// export default BlogIndex;

export const pageQuery = graphql`
  query BlogIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
