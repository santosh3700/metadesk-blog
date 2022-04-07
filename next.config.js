// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig

// const withPWA = require('next-pwa');

module.exports = {
  env: {
    wordpressApiUrl: 'https://newsctrls.com/graphql',
    headerMenuName: 'TieLabs Main Menu',
    text: {
      MORE: 'More',
      FOOTER_DESC:
        'NewsCtrls.com provides latest news from all over the world. Get breaking news alerts in field of politics, bollywood, hollywood and other social news by subscribing us.',
    },

    home: {
      categoryList: {
        SIDEBAR: {
          SIDEBAR_NAME: 'Breaking News',
          SIDEBAR_DESC: 'The latest entertainment news in the world',
          SIDEBAR_SLUG: '/category/breaking-news',
        },

        CATEGORY_A: {
          NAME: 'EDITORS PICK',
          DESC: 'The latest editore pick description',
          SLUG: '/category/editor-pick',
        },
        CATEGORY_B: {
          NAME: 'PRESS RELEASES DEMO',
          DESC: 'The latest entertainment news in the world',
          SLUG: '/category/bollywood',
        },
        CATEGORY_C: {
          NAME: 'COINS',
          DESC: 'The latest entertainment news in the world',
          SLUG: '/category/ipl-2022',
        },
        CATEGORY_D: {
          NAME: 'VIDEO',
          DESC: 'The latest entertainment news in the world',
          SLUG: '/category/social-news',
        },
        CATEGORY_E: {
          NAME: 'TOP NEWS',
          DESC: 'The latest entertainment news in the world',
          SLUG: '/category/social-news',
        },
        CATEGORY_F: {
          NAME: 'ACADEMY',
          DESC: 'The latest entertainment news in the world',
          SLUG: '/category/social-news',
        },
        CATEGORY_E: {
          NAME: 'REVIEWS',
          DESC: 'The latest entertainment news in the world',
          SLUG: '/category/social-news',
        },

        // CATEGORY_B: 'Romance',
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
      'newsctrls.com',
      'i0.wp.com',
      'secure.gravatar.com',
      'babacricnews.s3.ap-south-1.amazonaws.com',
    ],
  },
};
