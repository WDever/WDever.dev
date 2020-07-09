# Gatsby-starter-devlog

개발자 블로그를 위한 gatsby starter

## 예시

[예시](https://gatsby-starter-devlog.vercel.app/)

> 이 스타터를 사용하셨다면 이슈를 통해 알려주세요.

## 핵심 기능

- 그리드 뷰 🌈
- 코드 하이라이트 (Atom one dark + JetBrains Mono) ✨
- Utterances를 이용한 댓글 💬
- Buy me a coffee를 이용한 기부 ☕️💸
- Google Analytics 📊
- 다크 모드 지원 !!! 🌗

## Getting Start

1. Gatsby 앱 생성

```sh
yarn gatsby new my-blog https://github.com/WDever/gatsby-starter-devlog

혹은

npx gatsby new my-blog https://github.com/WDever/gatsby-starter-devlog
```

2. 개발 서버 시작

```sh
yarn develop

혹은

npm run develop
```

3. 포스트 생성

`content/articles`에 **cli!!!** 를 이용하여 포스트를 생성해보세요.

![create-post](assets/create-post.gif)

4. 포스트 작성

GitHub Flavor Markdown 문법으로 포스트를 작성 하실 수 있습니다.

또한 썸네일 이미지를 추가하실 수도 있습니다. 만약 썸네일 이미지가 필요 없으시다면 자동으로 생성된 `image` 메타데이터를 삭제해주세요.

5. Vercel로 배포

Vercel로 배포 해보세요!

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/WDever/gatsby-starter-develog)

## 구조

### root

```sh
/root
├── .eslintrc.json // eslint config file
├── .prettierrc // prettier config file
├── gatsby-browser.js // font, code style
├── gatsby-config.js // Gatsby config & metadata
└── gatsby-node.js // import gatsby files from lib
```

### src

```sh
src
├── components // Components with styling & some logic
├── hooks // Hooks that useful
├── lib // Fonts & gatsby files rewrite with TypeScript
├── pages // Routing except post: /(home), /about, /404
├── templates
│   ├── blog-post.tsx
│   └── home.tsx

├── types // Types that generate by graphql-codegen
└── utils
    ├── functions // Useful functions
    └── hooks //
```

### content

```sh
content
├── about // About you / resume
│   └── index.md
│
├── articles //  Posts
│   ├── my-first-post-example // Name of this directory will be the path
│       └── index.md // and some pictures or more...
│
├── assets
    ├── profile-pic // Profile picure that will use in BIO
    └── wdever-icon // Icon will be show in tab.
```

## 커스터마이즈

### 탭 아이콘

`assets/wdever-icon` 를 본인만의 고유한 아이콘으로 변경한 후 `gatsby-plugin-manifest` 에서 경로를 수정해주세요. 해당 설정은 `gatsby-config.js`에 있습니다.

### Profile Image

`assets/profile-pic` 를 본인만의 프로필사진으로 변경해보세요.

### Utterances

블로그 프로젝트를 올린 저장소의 이름 (유저 이름 / 저장소 이름 형식) 을 `gatsby-config.js/siteMetadata.repo` 에 입력해주세요.

### Google Analytics

본인의 trackingId를 `gatsby-config.js/gatsby-plugin-google-analytics.options.trackingId` 에 추가해주세요.

## 기여

많은 분들의 기여를 언제나 기다리고 있습니다. 함께 개선해주세요!

감사합니다.
