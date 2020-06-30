import React, { ReactElement } from 'react';
import BioItemComponent from 'components/items/bio-item';
import { MdMailOutline } from 'react-icons/md';
import { FiGithub } from 'react-icons/fi';
import { IoMdPaper } from 'react-icons/io';
import { useSiteMetadata } from 'hooks';
import styled from 'styled-components';
import { pxToRem } from 'utils';
import GatsbyImage from 'gatsby-image';
import { Default, media } from 'utils/style';

export default function Bio(): ReactElement {
  const { siteMetadata, childImageSharp } = useSiteMetadata();

  const { author, name, authorDescription, social } = siteMetadata;
  const { fixed } = childImageSharp;

  return (
    <Wrapper>
      <ContentWrapper>
        <div className='introduction-wrapper'>
          <Image fixed={fixed} alt={author || ''} />
          <div className='introduction'>
            <h1>
              <span>{author}</span> · {name}
            </h1>
            <h2>{authorDescription}</h2>
          </div>
        </div>
        <Button
          href={`https://www.buymeacoffee.com/${social.buyMeACoffee}`}
          target='_blank'
        >
          <span role='img' aria-label='Coffee'>
            ☕
          </span>
          Buy me a coffee!
        </Button>
      </ContentWrapper>
      <div className='contacts'>
        <BioItemComponent
          title='e-mail'
          content={social?.eMail}
          href={`mailto:${social?.eMail}`}
        >
          <MdMailOutline size='14' />
        </BioItemComponent>
        <BioItemComponent
          title='GitHub'
          content={social?.gitHub}
          href={`https://${social.gitHub}`}
        >
          <FiGithub size='14' />
        </BioItemComponent>
        <BioItemComponent
          title='Blog'
          content={social?.blog}
          href={`https://${social.blog}`}
        >
          <IoMdPaper size='14' />
        </BioItemComponent>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: ${pxToRem(198)};

  border-radius: ${pxToRem(8)};

  background-color: ${({ theme }): string => theme.bio};

  padding: ${pxToRem(16)};

  display: flex;
  flex-direction: column;

  div {
    display: inherit;
  }

  .contacts {
    justify-content: space-between;
  }

  ${media.phone} {
    height: auto;

    align-items: center;
  }
`;

const Image = styled(GatsbyImage)`
  min-width: ${pxToRem(86)};
  min-height: ${pxToRem(86)};

  border-radius: 50%;

  margin-right: ${pxToRem(20)};

  img {
    margin: 0;
  }

  ${media.phone} {
    margin: 0;
    margin-bottom: ${pxToRem(16)};
  }
`;

const ContentWrapper = styled.div`
  width: 100%;

  margin-bottom: ${pxToRem(16)};

  justify-content: space-between;

  .introduction {
    flex-direction: column;

    h1 {
      font-size: ${pxToRem(20)};
      line-height: 1.6;

      padding: 0;
      margin: 0;

      font-family: 'SpoqaHanSans';

      margin-bottom: ${pxToRem(12)};
      span {
        color: ${Default.main};
      }
    }

    h2 {
      font-size: ${pxToRem(16)};
      font-weight: normal;

      width: 100%;
      height: ${pxToRem(40)};

      overflow: hidden;

      font-family: 'SpoqaHanSans';

      margin: 0;
      padding: 0;
    }
  }

  ${media.phone} {
    flex-direction: column;
    align-items: center;

    .introduction-wrapper {
      flex-direction: column;
      align-items: center;

      margin-bottom: ${pxToRem(10)};
    }

    .introduction {
      align-items: center;
    }
  }
`;

const Button = styled.a`
  display: flex;

  min-width: ${pxToRem(148)};
  height: ${pxToRem(48)};

  border-radius: ${pxToRem(8)};

  background-color: ${Default.accent};

  border: none;
  outline: none;

  font-family: 'SpoqaHanSans';
  font-size: ${pxToRem(12)};
  color: #000;

  padding: ${pxToRem(14)} 0 ${pxToRem(14)} ${pxToRem(14)};

  cursor: pointer;

  span {
    width: ${pxToRem(20)};
    font-size: ${pxToRem(20)};
    line-height: 0.9;

    margin-right: ${pxToRem(12)};
  }
`;
