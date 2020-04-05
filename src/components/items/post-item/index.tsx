import React, { ReactElement } from 'react';
import { BlogIndexQueryQuery } from 'types';
import {
  Wrapper,
  Img,
  PostInfoWrapper,
  PostInfo,
  Title,
  Date,
  Description,
  TagList,
  StyledLink,
  ImgLink,
} from './style';
import PostTagItemComponent from '../post-tag-item';

interface Props {
  img: string;
  tags: BlogIndexQueryQuery['allMarkdownRemark']['edges'][number]['node']['frontmatter']['tags'];
  date: BlogIndexQueryQuery['allMarkdownRemark']['edges'][number]['node']['frontmatter']['date'];
  title: BlogIndexQueryQuery['allMarkdownRemark']['edges'][number]['node']['frontmatter']['title'];
  description: BlogIndexQueryQuery['allMarkdownRemark']['edges'][number]['node']['frontmatter']['description'];
  slug: BlogIndexQueryQuery['allMarkdownRemark']['edges'][number]['node']['fields']['slug'];
}

export default function PostItemComponent({
  img,
  date,
  title,
  description,
  tags,
  slug,
}: Props): ReactElement {
  const tagList = tags.map((item, i) => (
    <PostTagItemComponent key={i} tag={item} />
  ));

  return (
    <Wrapper>
      <ImgLink to={slug}>
        <Img src={img} alt='post' />
      </ImgLink>
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
        <Description>
          <StyledLink to={slug} isTitle={false}>
            {description}
          </StyledLink>
        </Description>
      </PostInfoWrapper>
    </Wrapper>
  );
}