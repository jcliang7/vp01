module.exports = {
    title: "資訊科技與社會關懷",
    description: "學習、成長、互助、分享",
    head: [
        ['link', { rel: 'icon', href: `/favicon.ico` }]
    ],
    base: "/vp01/",
    dest: "public",
    port: 8000,
    host: "0.0.0.0",
    themeConfig: {
        author: "Jia-Yin Wang",
        search: false,
        sidebar: false,
        nav: [
            { text: '彩音地墊', link: '/carpet'}
        ],
        sidebar: [
            '/intro',
            ['/carpet', '》彩音地墊'],
            ['/new', '書本位置'],
            '/ooxx',
          ]
        },
};