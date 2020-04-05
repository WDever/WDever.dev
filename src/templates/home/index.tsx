import React, { ReactElement } from 'react';
import { BlogIndexQueryQuery } from 'types';
import PostItemComponent from 'components/items/post-item';
import { includesArr } from 'utils';
import { Main, Inner } from './style';

interface Props {
  posts: BlogIndexQueryQuery['allMarkdownRemark']['edges'];
  selectedTags: string[];
}

export default function HomeTemplate({
  posts,
  selectedTags,
}: Props): ReactElement {
  const allPostList = posts.map(
    ({
      node,
    }: {
      node: BlogIndexQueryQuery['allMarkdownRemark']['edges'][number]['node'];
    }) => {
      const title: string = node.frontmatter.title || node.fields.slug;

      return (
        <PostItemComponent
          key={node.fields.slug}
          img='https://miro.medium.com/max/10368/1*RF2MAfjB1_0FowzOmTW78Q.jpeg'
          title={title}
          date={node.frontmatter.date}
          description={node.frontmatter.description}
          tags={node.frontmatter.tags}
          slug={node.fields.slug}
        />
      );
    },
  );

  const filteredPostList = posts
    .map(
      ({
        node,
      }: {
        node: BlogIndexQueryQuery['allMarkdownRemark']['edges'][number]['node'];
      }) => {
        const title: string = node.frontmatter.title || node.fields.slug;

        if (includesArr(node.frontmatter.tags, selectedTags)) {
          return (
            <PostItemComponent
              key={node.fields.slug}
              img='https://miro.medium.com/max/10368/1*RF2MAfjB1_0FowzOmTW78Q.jpeg'
              title={title}
              date={node.frontmatter.date}
              description={node.frontmatter.description}
              tags={node.frontmatter.tags}
              slug={node.fields.slug}
            />
          );
        }

        return undefined;
      },
    )
    .filter(item => item !== undefined);

  const postList = selectedTags.length === 0 ? allPostList : filteredPostList;

  return (
    <Main>
      <Inner>{postList}</Inner>
    </Main>
  );
}
