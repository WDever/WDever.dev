import React, { ReactElement } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import BioItemComponent from 'components/items/bio-item';
import { MdMailOutline } from 'react-icons/md';
import { FiGithub } from 'react-icons/fi';
import { IoMdPaper } from 'react-icons/io';
import { BioQueryQuery } from '../../types/graphqlTypes';
import { Wrapper, Image, ContentWrapper, Button } from './style';

export default function Bio(): ReactElement {
  const data: BioQueryQuery = useStaticQuery<BioQueryQuery>(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 86, height: 86) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            instagram
            eMail
            gitHub
            blog
          }
        }
      }
    }
  `);

  const { author, social } = data.site.siteMetadata;
  const { fixed } = data.avatar.childImageSharp;

  return (
    <Wrapper>
      <ContentWrapper>
        <div className='introduction-wrapper'>
          <Image fixed={fixed} alt={author} />
          <div className='introduction'>
            <h1>
              <span>WDever</span> · 최민규
            </h1>
            <h2>더 나은 코드를 위해 노력하는 개발자입니다.</h2>
          </div>
        </div>
        <Button href='https://www.buymeacoffee.com/WDever' target='_blank'>
          <span role='img' aria-label='Coffee'>
            ☕
          </span>
          Buy me a coffee!
        </Button>
      </ContentWrapper>
      <div className='contacts'>
        <BioItemComponent
          title='e-mail'
          content={social.eMail}
          href={`mailto:${social.eMail}`}
        >
          <MdMailOutline size='14' />
        </BioItemComponent>
        <BioItemComponent
          title='GitGub'
          content={social.gitHub}
          href={`https://${social.gitHub}`}
        >
          <FiGithub size='14' />
        </BioItemComponent>
        <BioItemComponent
          title='Blog'
          content={social.blog}
          href={`https://${social.blog}`}
        >
          <IoMdPaper size='14' />
        </BioItemComponent>
      </div>
    </Wrapper>
  );
}
