import React, { ReactElement } from 'react';
import { BlogIndexQueryQuery } from 'types';
import PostItemComponent from 'components/items/postItem';
import { Main, Inner } from './home.style';

interface Props {
  posts: BlogIndexQueryQuery['allMarkdownRemark']['edges'];
}

export default function HomeTemplate({ posts }: Props): ReactElement {
  const postList = posts.map(
    ({
      node,
    }: {
      node: BlogIndexQueryQuery['allMarkdownRemark']['edges'][number]['node'];
    }) => {
      const title = node.frontmatter.title || node.fields.slug;

      return (
        <PostItemComponent
          key={node.fields.slug}
          img='https://miro.medium.com/max/10368/1*RF2MAfjB1_0FowzOmTW78Q.jpeg'
          title={title}
          date={node.frontmatter.date}
          excerpt={node.excerpt}
          tags={node.frontmatter.tags}
          slug={node.fields.slug}
        />
      );
    },
  );

  return (
    <Main>
      <Inner>{postList}</Inner>
    </Main>
  );
}
