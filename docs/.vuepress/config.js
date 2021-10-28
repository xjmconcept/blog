module.exports = {
  title: "Concept",
  description: "A blog of a front-end engineer",
  base: '/blog/',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      {
        text: '前端',
        ariaLabel: 'Front End Menu',
        items: [
          { text: 'HTML', link: '' },
          { text: 'CSS', link: '' },
          { text: 'JavaScript', link: '' },
          { text: '算法', link: '' },
          { text: '工程化', link: '' },
          { text: '可视化', link: '' },
          { text: '前端安全', link: '' },
          { text: '前端性能', link: '' }
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
        text: '选择语言',
        ariaLabel: 'Language Menu',
        items: [
          { text: '简体中文', link: '/language/chinese/' },
          { text: 'English', link: '/language/English/' }
        ]
      },
      { text: 'Github', link: 'https://github.com/xjmconcept' },
    ]
  },
  markdown: {
    lineNumbers: true
  }
}