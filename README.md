[🇰🇷한국어](README-ko.md)

# Gatsby-starter-devlog

gatsby starter for developer's blog.

## Demo

[demo](https://gatsby-starter-devlog.vercel.app/)

[Use Cases](USECASE.md)

> Tell me if you use this starter

## Features

- Grid View 🌈
- Code Highlight (Atom one dark + JetBrains Mono) ✨
- Comment with Utterances 💬
- Buy me a coffee ☕️💸
- Google Analytics 📊
- Dark Mode Support !!! 🌗

## Getting Start

1. Create a Gatsby app

```sh
yarn gatsby new my-blog https://github.com/WDever/gatsby-starter-devlog

or

npx gatsby new my-blog https://github.com/WDever/gatsby-starter-devlog
```

2. Start development server

```sh
yarn develop

or

npm run develop
```

3. Create your post

Create post in `content/articles` with **cli!!!**

![create-post](assets/create-post.gif)

4. Write your post

You can write your content with GitHub Flavor Markdown.

Also you can add thumbnail images or not. If you won't add thumbnail images, remove `image` in metadata

5. Deploy to vercel

Try to use Vercel!

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/WDever/gatsby-starter-develog)

## Structure

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
    └── functions // Useful functions
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

## Customize

### Tab Icon

Replace `assets/wdever-icon` with your own icon and change path in `gatsby-plugin-manifest`. This config is in the `gatsby-config.js`

### Profile Image

Replace `assets/profile-pic` with your own profile pic

### Utterances

Add your repo name (username/repo) in `gatsby-config.js/siteMetadata.repo`

### Google Analytics

Add tour trackingId in `gatsby-config.js/gatsby-plugin-google-analytics.options.trackingId`

## Trouble Shooting

### Field "image" must not have a selection since type "String" has no subfields

The reason why this issue occurs is because some post doesn't have correct `image` meatadata. Remove `image` in metadata or set Correct metadata.

### localStorage is not defined

I don't know why this issue occurs. I guess localStorage isn't defined at build time. But don't worry, everything will work fine.

## Contributing

I'm always waiting you guys's contribute. Please Contribute.

Thanks.
