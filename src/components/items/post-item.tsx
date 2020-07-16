import React, { ReactElement } from 'react';
import { BlogIndexQueryQuery } from 'types';
import styled from 'styled-components';
import { pxToRem } from 'utils';
import { Default, media } from 'utils/style';
import { Link } from 'gatsby';
import CardTagItemComponent from './card-tag-item';

interface Props {
  img: BlogIndexQueryQuery['allMarkdownRemark']['edges'][number]['node']['frontmatter']['image'];
  tags: BlogIndexQueryQuery['allMarkdownRemark']['edges'][number]['node']['frontmatter']['tags'];
  date: BlogIndexQueryQuery['allMarkdownRemark']['edges'][number]['node']['frontmatter']['date'];
  title: BlogIndexQueryQuery['allMarkdownRemark']['edges'][number]['node']['frontmatter']['title'];
  description: BlogIndexQueryQuery['allMarkdownRemark']['edges'][number]['node']['frontmatter']['description'];
  slug: BlogIndexQueryQuery['allMarkdownRemark']['edges'][number]['node']['fields']['slug'];
  timeToRead: BlogIndexQueryQuery['allMarkdownRemark']['edges'][number]['node']['timeToRead'];
}

export default function PostItemComponent({
  img,
  date,
  title,
  description,
  tags,
  slug,
  timeToRead,
}: Props): ReactElement {
  const tagList = tags.map((item, i) => (
    <CardTagItemComponent key={i} tag={item} />
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
        <Button className='button' to={slug}>
          <span>{timeToRead} min to read</span>
          <span className='read-more'>Read More</span>
        </Button>
      </Wrapper>
    );
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
        <Description haveImage>
          <StyledLink to={slug} isTitle={false}>
            {description}
          </StyledLink>
        </Description>
      </PostInfoWrapper>
      <Button className='button' to={slug}>
        <span>{timeToRead} min to read</span>
        <span className='read-more'>Read More</span>
      </Button>
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

  border-radius: ${pxToRem(4)};

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

  :hover {
    .button {
      background-position: left bottom;

      span {
        color: #fff;
      }

      .read-more {
        font-weight: bold;
      }
    }
  }
`;

const PostInfoWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  padding: ${pxToRem(8)} ${pxToRem(16)} ${pxToRem(0)} ${pxToRem(16)};

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
  overflow: scroll;
`;

const Date = styled.p`
  font-family: 'SpoqaHanSans';
  font-size: ${pxToRem(10)};
  color: ${Default.date};

  margin: 0;
`;

const Title = styled.h1`
  margin: 0;
  margin-top: ${pxToRem(10)};

  max-height: ${pxToRem(57)};

  font-family: 'Gothic A1';
  font-size: ${pxToRem(22)};
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

const Description = styled.h2<{ haveImage?: boolean }>`
  margin: 0;
  margin-top: ${pxToRem(10)};

  max-height: ${({ haveImage }): string =>
    haveImage ? pxToRem(54) : pxToRem(216)};

  overflow: hidden;

  font-family: 'SpoqaHanSans';
  font-size: ${pxToRem(12)};
  font-weight: normal;
  color: ${({ theme }): string => theme.subFont};
  line-height: 1.5;

  cursor: pointer;

  ${media.tabletM} {
    font-size: ${pxToRem(12)};
    margin-top: ${pxToRem(10)};
  }
`;

const StyledLink = styled(Link)<{ isTitle: boolean }>`
  width: 100%;
  box-shadow: none;
  color: ${({ theme, isTitle }): string =>
    isTitle ? theme.mainFont : theme.subFont};
`;

const ImgLink = styled(Link)<{ imgsrc: string }>`
  height: ${pxToRem(156)};
  box-shadow: none;

  background-image: ${({ imgsrc }): string => `url(${imgsrc})`};
  background-size: cover;

  border-top-right-radius: ${pxToRem(4)};
  border-top-left-radius: ${pxToRem(4)};
`;

const Button = styled(Link)`
  position: relative;

  width: 100%;
  height: ${pxToRem(48)};

  margin-top: auto;
  padding: ${pxToRem(16)};

  border-top: 1px solid ${({ theme }): string => theme.itemBtnBorder};
  border-bottom-left-radius: ${pxToRem(4)};
  border-bottom-right-radius: ${pxToRem(4)};

  display: flex;
  justify-content: space-between;

  text-decoration: none;
  font-size: ${pxToRem(10)};

  background: linear-gradient(
    to right,
    ${Default.main} 50%,
    ${({ theme }): string => theme.item} 50%
  );
  background-size: 200% 100%;
  background-position: right bottom;

  span {
    color: ${Default.date};

    transition: all 0.4s;

    z-index: 10;
  }

  .read-more {
    color: ${({ theme }): string => theme.subFont};
  }

  transition: all ease 0.4s;
`;
