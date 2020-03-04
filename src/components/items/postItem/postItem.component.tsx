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
  StyledLink,
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
  slug,
}: Props): ReactElement {
  const tagList = tags.map((item, i) => (
    <PostTagItemComponent key={i} tag={item} />
  ));

  return (
    <Wrapper>
      <StyledLink to={slug} isTitle>
        <Img src={img} alt='post' />
      </StyledLink>
      <PostInfoWrapper>
        <PostInfo>
          <TagList>{tagList}</TagList>
          <Date>{date}</Date>
        </PostInfo>
        <Title>
          <StyledLink to={slug} isTitle>
            {title}
          </StyledLink>
        </Title>
        <Excerpt>
          <StyledLink to={slug} isTitle={false}>
            {excerpt}
          </StyledLink>
        </Excerpt>
      </PostInfoWrapper>
    </Wrapper>
  );
}
