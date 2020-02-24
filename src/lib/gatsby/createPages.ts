import path from 'path';
import { CreatePagesArgs, Actions } from 'gatsby';
import { ResultRemarkQueryQuery } from '../../types/graphqlTypes';

export const createPages: ({
  graphql,
  actions,
}: CreatePagesArgs) => void = async ({ graphql, actions }: CreatePagesArgs) => {
  const { createPage }: { createPage: Actions['createPage'] } = actions;

  const blogPost: string = path.resolve(`./src/templates/blog-post.tsx`);
  const result: {
    errors?: any;
    data?: ResultRemarkQueryQuery | undefined;
  } = await graphql<ResultRemarkQueryQuery>(
    `
      query ResultRemarkQuery {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `,
  );

  if (result.errors) {
    throw result.errors;
  }
  // Create blog posts pages.
  if (!result.data) {
    return;
  }

  const posts: ResultRemarkQueryQuery['allMarkdownRemark']['edges'] =
    result.data.allMarkdownRemark.edges;

  posts.forEach(
    (
      post: ResultRemarkQueryQuery['allMarkdownRemark']['edges'][number],
      index: number,
    ) => {
      const previous:
        | ResultRemarkQueryQuery['allMarkdownRemark']['edges'][number]['node']
        | null = index === posts.length - 1 ? null : posts[index + 1].node;
      const next:
        | ResultRemarkQueryQuery['allMarkdownRemark']['edges'][number]['node']
        | null = index === 0 ? null : posts[index - 1].node;

      createPage({
        path: post.node.fields.slug,
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      });
    },
  );
};
