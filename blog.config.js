const BLOG = {
  API_BASE_URL: process.env.API_BASE_URL || 'https://www.notion.so/api/v3',
  NOTION_PAGE_ID:
    process.env.NOTION_PAGE_ID ||
    '02ab3b8678004aa69e9e415905ef32a5,en:7c1d570661754c8fbc568e00a01fd70e',
  THEME: process.env.NEXT_PUBLIC_THEME || 'gitbook',
  LANG: process.env.NEXT_PUBLIC_LANG || 'zh-CN',
  SINCE: process.env.NEXT_PUBLIC_SINCE || 2021,

  PSEUDO_STATIC: process.env.NEXT_PUBLIC_PSEUDO_STATIC || false,
  NEXT_REVALIDATE_SECOND: process.env.NEXT_PUBLIC_REVALIDATE_SECOND || 60,
  APPEARANCE: process.env.NEXT_PUBLIC_APPEARANCE || 'auto',
  APPEARANCE_DARK_TIME:
    process.env.NEXT_PUBLIC_APPEARANCE_DARK_TIME || [19, 6],

  AUTHOR: process.env.NEXT_PUBLIC_AUTHOR || '柯慕灵',
  BIO:
    process.env.NEXT_PUBLIC_BIO || '想要成为算法工程师的菜鸟程序猿',
  LINK: process.env.NEXT_PUBLIC_LINK || 'https://www.kemuling.blog',
  KEYWORDS: process.env.NEXT_PUBLIC_KEYWORD || 'Notion, 博客',
  BLOG_FAVICON: process.env.NEXT_PUBLIC_FAVICON || '/logo.jpg',
  BEI_AN: process.env.NEXT_PUBLIC_BEI_AN || '',
  BEI_AN_LINK:
    process.env.NEXT_PUBLIC_BEI_AN_LINK || 'https://beian.miit.gov.cn/',
  BEI_AN_GONGAN: process.env.NEXT_PUBLIC_BEI_AN_GONGAN || '',

  ENABLE_RSS: process.env.NEXT_PUBLIC_ENABLE_RSS || true,

  ...require('./conf/comment.config'),
  ...require('./conf/contact.config'),
  ...require('./conf/post.config'),
  ...require('./conf/analytics.config'),
  ...require('./conf/image.config'),
  ...require('./conf/font.config'),
  ...require('./conf/right-click-menu'),
  ...require('./conf/code.config'),
  ...require('./conf/animation.config'),
  ...require('./conf/widget.config'),
  ...require('./conf/ad.config'),
  ...require('./conf/plugin.config'),
  ...require('./conf/performance.config'),

  ...require('./conf/layout-map.config'),
  ...require('./conf/notion.config'),
  ...require('./conf/dev.config'),

  CUSTOM_EXTERNAL_JS: [''],
  CUSTOM_EXTERNAL_CSS: [''],
  CUSTOM_MENU: process.env.NEXT_PUBLIC_CUSTOM_MENU || false,
  CAN_COPY: process.env.NEXT_PUBLIC_CAN_COPY || true,
  LAYOUT_SIDEBAR_REVERSE:
    process.env.NEXT_PUBLIC_LAYOUT_SIDEBAR_REVERSE || false,
  GREETING_WORDS:
    process.env.NEXT_PUBLIC_GREETING_WORDS ||
    'Hi，欢迎来到这里, Hi，很高兴认识你, Hi，祝你开心每一天, 文章千古事，得失寸心知',
  UUID_REDIRECT: process.env.UUID_REDIRECT || false
}

module.exports = BLOG
