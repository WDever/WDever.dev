import React, { ReactElement } from 'react';
import { BlogIndexQueryQuery } from 'types';
import PostItemComponent from 'components/items/post-item';
import { includesArr, pxToRem } from 'utils';
import styled from 'styled-components';
import { BaseInner, media } from 'utils/style';

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
          img={node.frontmatter.image}
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
              img={node.frontmatter.image}
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
    .filter((item) => item !== undefined);

  const postList = selectedTags.length === 0 ? allPostList : filteredPostList;

  return (
    <Main>
      <Inner>{postList}</Inner>
    </Main>
  );
}

export const Main = styled.main`
  width: 100%;
  min-height: calc(100vh - 160px - 88px - 56px - 3.5rem - 80px);

  margin-bottom: ${pxToRem(80)};
`;

export const Inner = styled.div`
  ${BaseInner};

  display: grid;

  grid-template-columns: ${(): string => `repeat(auto-fill, ${pxToRem(412)})`};

  grid-row-gap: ${pxToRem(56)};

  grid-auto-rows: ${pxToRem(416)};

  ${media.tabletL} {
    grid-template-columns: ${(): string =>
      `repeat(auto-fill, ${pxToRem(340)})`};
    grid-auto-rows: ${pxToRem(360)};
  }

  ${media.phone} {
    grid-template-columns: repeat(auto-fill, 100%);
    grid-row-gap: ${pxToRem(24)};
  }

  justify-content: space-between;
`;
