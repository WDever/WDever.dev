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
      <div className='guide'>{isNext ? 'Next post →' : '← Previous Post'}</div>
    </Wrapper>
  );
}

const Wrapper = styled(Link)<{ isNext: boolean }>`
  width: ${pxToRem(340)};

  text-decoration: none;

  display: flex;
  flex-direction: column;

  font-family: 'SpoqaHanSans';

  background-color: ${({ theme }): string => theme.item};

  box-shadow: ${({ theme }): string => theme.itemShadow};

  border-radius: ${pxToRem(4)};

  margin-top: ${pxToRem(20)};
  margin-bottom: ${pxToRem(56)};

  padding: 0;
  padding-top: ${pxToRem(16)};

  :hover {
    .guide {
      background-position: left bottom;

      color: #fff;
      font-weight: bold;
    }
  }

  ${media.phone} {
    width: 100%;
    height: auto;

    margin: 0;

    :first-of-type {
      margin-top: ${pxToRem(16)};
    }
  }

  h1 {
    font-size: ${pxToRem(20)};
    color: ${({ theme }): string => theme.mainFont};

    height: ${pxToRem(52)};
    max-height: ${pxToRem(52)};

    text-overflow: ellipsis;
    overflow: hidden;

    margin: 0;
    padding: 0 ${pxToRem(16)};
    margin-bottom: ${pxToRem(14)};

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
    color: ${Default.main};

    border-top: 1px solid ${({ theme }): string => theme.itemBtnBorder};

    padding: ${pxToRem(16)};
    margin: 0;

    background: linear-gradient(
      to right,
      ${Default.main} 50%,
      ${({ theme }): string => theme.item} 50%
    );
    background-size: 200% 100%;
    background-position: right bottom;

    border-bottom-right-radius: ${pxToRem(4)};
    border-bottom-left-radius: ${pxToRem(4)};

    transition: all ease 0.4s;
  }
`;
