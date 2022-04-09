// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig

// const withPWA = require('next-pwa');

module.exports = {
  env: {
    wordpressApiUrl: 'http://13.212.30.117/graphql',
    headerMenuName: 'Main menu',
    text: {
      MORE: 'More',
      FOOTER_DESC:
        ' Metadesk provides latest crypto news from all over the world. Get breaking news alerts in field of politics, bollywood, hollywood and other social news by subscribing us.',
    },

    home: {
      categoryList: {
        SIDEBAR: {
          SIDEBAR_NAME: 'News',
          SIDEBAR_DESC: 'The latest entertainment news in the world',
          SIDEBAR_SLUG: '/category/breaking-news',
        },

        CATEGORY_A: {
          DEMO_NAME: 'News',
          NAME: 'EDITORS PICK',
          DESC: 'The latest editore pick description',
          SLUG: '/category/editor-pick',
        },
        CATEGORY_B: {
          DEMO_NAME: 'News',
          NAME: 'PRESS RELEASES ',
          DESC: 'The latest entertainment news in the world',
          SLUG: '/category/bollywood',
        },
        CATEGORY_C: {
          DEMO_NAME: 'News',
          NAME: 'COINS',
          DESC: 'The latest entertainment news in the world',
          SLUG: '/category/ipl-2022',
        },
        CATEGORY_D: {
          DEMO_NAME: 'News',
          NAME: 'VIDEO',
          DESC: 'The latest entertainment news in the world',
          SLUG: '/category/social-news',
        },
        CATEGORY_E: {
          DEMO_NAME: 'News',
          NAME: 'TOP NEWS',
          DESC: 'The latest entertainment news in the world',
          SLUG: '/category/social-news',
        },
        CATEGORY_F: {
          DEMO_NAME: 'News',
          NAME: 'ACADEMY',
          DESC: 'The latest entertainment news in the world',
          SLUG: '/category/social-news',
        },

        CATEGORY_G: {
          DEMO_NAME: 'News',
          NAME: 'REVIEWS',
          DESC: 'The latest entertainment news in the world',
          SLUG: '/category/social-news',
        },

        // CATEGORY_B: 'Romance',
      },
    },

    post: {
      TRENDING: {
        DEMO_NAME: 'VIDEO',
        NAME: 'REVIEWS',
        DESC: 'The latest entertainment news in the world',
        SLUG: '/category/social-news',
      },
    },

    image: {
      LOGO: 'https://newsctrls.com/wp-content/uploads/2022/04/news-ctrls.com-1.png',
    },
    color: {
      PRIMARY_COLOR: '#1e4683',
    },
  },
  images: {
    domains: [
      'http://13.212.30.117',
      'i0.wp.com',
      'secure.gravatar.com',
      'babacricnews.s3.ap-south-1.amazonaws.com',
      'i1.ytimg.com',
    ],
  },
};
