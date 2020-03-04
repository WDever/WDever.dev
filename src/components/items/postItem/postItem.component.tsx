import React, { ReactElement } from 'react';
import { BlogIndexQueryQuery } from 'types';
import {
  Wrapper,
  Img,
  PostInfoWrapper,
  PostInfo,
  Title,
  Date,
  Excerpt,
  TagList,
} from './postItem.style';
import PostTagItemComponent from '../postTagItem';

interface Props {
  img: string;
  tags: BlogIndexQueryQuery['allMarkdownRemark']['edges'][number]['node']['frontmatter']['tags'];
  date: BlogIndexQueryQuery['allMarkdownRemark']['edges'][number]['node']['frontmatter']['date'];
  title: BlogIndexQueryQuery['allMarkdownRemark']['edges'][number]['node']['frontmatter']['title'];
  excerpt: BlogIndexQueryQuery['allMarkdownRemark']['edges'][number]['node']['excerpt'];
  slug: BlogIndexQueryQuery['allMarkdownRemark']['edges'][number]['node']['fields']['slug'];
}

export default function PostItemComponent({
  img,
  date,
  title,
  excerpt,
  tags,
}: Props): ReactElement {
  const tagList = tags.map((item, i) => (
    <PostTagItemComponent key={i} tag={item} />
  ));

  return (
    <Wrapper>
      <Img src={img} alt='post' />
      <PostInfoWrapper>
        <PostInfo>
          <TagList>{tagList}</TagList>
          <Date>{date}</Date>
        </PostInfo>
        <Title>{title}</Title>
        <Excerpt>{excerpt}</Excerpt>
      </PostInfoWrapper>
    </Wrapper>
  );
}
