import React, { ReactElement } from 'react';
import { BlogIndexQueryQuery } from 'types';
import styled from 'styled-components';
import { pxToRem } from 'utils';
import { Default, media } from 'utils/style';
import { Link } from 'gatsby';
import PostTagItemComponent from './post-tag-item';

interface Props {
  img: BlogIndexQueryQuery['allMarkdownRemark']['edges'][number]['node']['frontmatter']['image'];
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

  if (img === null) {
    return (
      <Wrapper>
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
    // return <></>;
  }

  const { src } = img.childImageSharp.fluid;

  return (
    <Wrapper>
      <ImgLink to={slug} imgsrc={src} />
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

const Wrapper = styled.article`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  background-color: ${({ theme }): string => theme.item};
  box-shadow: ${({ theme }): string => theme.itemShadow};

  border-radius: ${pxToRem(8)};

  transition: box-shadow 0.3s;

  :hover {
    box-shadow: ${Default.postItemHoverShadow};
  }

  h1,
  h2,
  p {
    padding: 0;

    border: none;
  }
`;

const PostInfoWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  padding: ${pxToRem(10)} ${pxToRem(10)} ${pxToRem(24)} ${pxToRem(10)};

  ${media.tabletM} {
    padding-bottom: ${pxToRem(16)};
  }
`;

const PostInfo = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TagList = styled.div`
  max-width: 70%;
`;

const Date = styled.p`
  font-family: 'SpoqaHanSans';
  font-size: ${pxToRem(10)};
  color: ${Default.date};

  margin: 0;
`;

const Title = styled.h1`
  margin: 0;
  margin-top: ${pxToRem(14)};

  max-height: ${pxToRem(70)};

  font-family: 'Gothic A1';
  font-size: ${pxToRem(30)};
  line-height: 1.3;

  text-overflow: ellipsis;
  overflow: hidden;

  display: flex;
  align-items: flex-start;

  cursor: pointer;

  ${media.tabletM} {
    font-size: ${pxToRem(24)};
    margin-top: ${pxToRem(6)};
  }
`;

const Description = styled.h2`
  margin: 0;
  margin-top: ${pxToRem(16)};

  font-family: 'SpoqaHanSans';
  font-size: ${pxToRem(16)};
  font-weight: normal;
  color: ${({ theme }): string => theme.subFont};
  line-height: 1.7;

  cursor: pointer;

  ${media.tabletM} {
    font-size: ${pxToRem(12)};
    margin-top: ${pxToRem(10)};
  }
`;

const StyledLink = styled(Link)<{ isTitle: boolean }>`
  box-shadow: none;
  color: ${({ theme, isTitle }): string =>
    isTitle ? theme.mainFont : theme.subFont};
`;

const ImgLink = styled(Link)<{ imgsrc: string }>`
  height: ${pxToRem(204)};
  box-shadow: none;

  background-image: ${({ imgsrc }): string => `url(${imgsrc})`};
  background-size: cover;

  border-top-right-radius: ${pxToRem(8)};
  border-top-left-radius: ${pxToRem(8)};
`;
