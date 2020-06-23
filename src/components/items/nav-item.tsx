import React, { ReactElement } from 'react';
import { SitePageContext } from 'types';
import styled from 'styled-components';
import { pxToRem } from 'utils';
import { Default, media } from 'utils/style';
import { Link } from 'gatsby';

interface Props {
  data: SitePageContext['previous'] | SitePageContext['next'];
  isNext: boolean;
}

export default function NavItemComponent({
  data,
  isNext,
}: Props): ReactElement {
  const { title } = data.frontmatter;
  const { slug } = data.fields;

  return (
    <Wrapper isNext={isNext} to={slug}>
      <h1>{title}</h1>
      <p className='guide'>{isNext ? 'Next post →' : '← Previous Post'}</p>
    </Wrapper>
  );
}

const Wrapper = styled(Link)<{ isNext: boolean }>`
  width: ${pxToRem(342)};
  height: ${pxToRem(152)};

  text-decoration: none;

  display: flex;
  flex-direction: column;

  font-family: 'SpoqaHanSans';

  background-color: ${({ theme }): string => theme.item};

  box-shadow: ${({ theme }): string => theme.itemShadow};

  border-radius: ${pxToRem(8)};

  margin-top: ${pxToRem(20)};
  margin-bottom: ${pxToRem(56)};

  padding: ${pxToRem(16)} ${pxToRem(20)};

  ${media.phone} {
    width: 100%;
    height: auto;

    margin: 0;
  }

  p {
    color: ${Default.main};

    margin: 0;
  }

  .date {
    color: ${Default.date};
  }

  h1 {
    font-size: ${pxToRem(24)};
    color: ${({ theme }): string => theme.mainFont};

    height: ${pxToRem(62)};
    max-height: ${pxToRem(62)};

    text-overflow: ellipsis;
    overflow: hidden;

    margin-top: ${pxToRem(16)};
    margin-bottom: ${pxToRem(10)};

    padding: 0;

    ${media.phone} {
      font-size: ${pxToRem(20)};

      height: ${pxToRem(52)};
      max-height: ${pxToRem(52)};

      margin-top: 0;
    }
  }

  .guide {
    font-size: ${pxToRem(12)};

    text-align: ${({ isNext }): string => (isNext ? 'end' : 'start')};
  }
`;
