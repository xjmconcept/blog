module.exports = {
  title: "Concept",
  description: "A blog of a front-end engineer",
  base: '/blog/',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      {
        text: '前端基础',
        ariaLabel: 'Primary Front End Menu',
        items: [
          { text: 'HTML', link: '/front-end/html/dom/' },
          { text: 'CSS', link: '' },
          { text: 'JavaScript', link: '' }
        ]
      },
      {
        text: '前端进阶',
        ariaLabel: 'Advanced Front End Menu',
        items: [
          { text: 'Vue', link: '' },
          { text: 'TypeScript', link: '' },
          { text: '工程化', link: '' },
          { text: 'UI框架', link: '' },
          { text: '前端安全', link: '' },
          { text: '前端性能', link: '' },
          { text: '小程序', link: '' },
          { text: '可视化', link: '' },
          { text: '算法', link: '' }
        ]
      },
      {
        text: '后端',
        ariaLabel: 'Back End Menu',
        items: [
          { text: 'Node', link: '' },
          { text: 'PHP', link: '' }
        ]
      },
      {
        text: '开发工具',
        ariaLabel: 'Back End Menu',
        items: [
          { text: 'Git', link: '' },
          { text: '调试工具', link: '' }
        ]
      },
      { text: 'Github', link: 'https://github.com/xjmconcept' },
    ]
  },
  markdown: {
    lineNumbers: true
  }
}