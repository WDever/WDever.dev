import React, { ReactElement } from 'react';
import BioComponent from 'components/bio';
import Layout from 'components/layout';
import { graphql } from 'gatsby';
import { AboutPageQueryQuery } from 'types';
import { Wrapper } from './style';

interface Props {
  location: Location;
  data: AboutPageQueryQuery;
}

export default function AboutPage({ location, data }: Props): ReactElement {
  const { title } = data.site.siteMetadata;
  return (
    <Layout location={location} selectedTags={['About']} title={title}>
      <Wrapper>
        <BioComponent />
        <h1>인사!</h1>
        <p>
          안녕하세요. 프론트엔드 개발을 배우는 최민규입니다. 언제나 더 쉽고 나은
          코드를 작성하기 위해 고민합니다. 하루가 다르게 발전하는 프론트엔드
          세계의 새로운 기술들을 배우는데 관심 있습니다.
        </p>
        <p>
          제가 배우는 것을 공개하고 공유하기 위해 블로그를 만들었습니다. 저
          스스로와 많은 사람들에게 도움이 되면 좋겠습니다.
        </p>
        <h1>사용할 수 있는 기술</h1>
        <ul>
          <li>TypeScript</li>
        </ul>
        <ul>
          <li>ES6+</li>
        </ul>
        <ul>
          <li>React &amp; Hooks</li>
        </ul>
        <ul>
          <li>Redux</li>
        </ul>
        <ul>
          <li>CSS / SCSS</li>
        </ul>
        <h1>관심 있는 기술</h1>
        <ul>
          <li>GraphQL</li>
        </ul>
        <ul>
          <li>SSR</li>
        </ul>
        <ul>
          <li>UI / UX</li>
        </ul>
        <ul>
          <li>TDD</li>
        </ul>
        <ul>
          <li>StoryBook</li>
        </ul>
        <ul>
          <li>SEO</li>
        </ul>
        <h1>프로젝트</h1>
        <h2>
          <a href='http://hanlight.kr'>한빛</a> - 진행중
        </h2>
        <p>
          <strong>한세사이버보안고등학교 교내 커뮤니티 서비스</strong>
        </p>
        <h3>사용 기술</h3>
        <ul>
          <li>React</li>
        </ul>
        <ul>
          <li>Redux &amp; Redux-Saga</li>
        </ul>
        <ul>
          <li>TypeScript</li>
        </ul>
        <h2>
          <a href='https://github.com/WDever/angelhack-pepcis'>Remeet</a> - 종료
        </h2>
        <p>
          <strong>2019 Angel Hack Seoul IBM Challenge 수상작</strong>
        </p>
        <h3>사용 기술</h3>
        <ul>
          <li>React</li>
        </ul>
        <ul>
          <li>Redux &amp; Redux-Saga</li>
        </ul>
        <ul>
          <li>TypeScript</li>
        </ul>
        <h2>
          <a href='https://github.com/WDever/hansei-melon'>Hansei Music</a> -
          종료
        </h2>
        <p>
          <strong>
            한세사이버보안고등학교 점심시간 음악 신청 서비스. 한빛 내부 기능으로
            통합 예정
          </strong>
        </p>
        <h3>사용 기술</h3>
        <ul>
          <li>React</li>
        </ul>
        <ul>
          <li>Redux</li>
        </ul>
      </Wrapper>
    </Layout>
  );
}

export const pageQuery = graphql`
  query AboutPageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
