module.exports = {
  title: 'Kayui-vue',
  description: '一款ui框架～',
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    ['link', { rel: 'icon', href: './public/logo.png' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '', // 这是部署到github相关的配置 下面会讲
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  dest:'public',
  themeConfig: {
    sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间,
    // nav:[
    //   { text: '前端', link: '' }, // 内部链接 以docs为根目录
    //   { text: '前端2', link: '' }, // 外部链接
    //   // 下拉列表
    //   {
    //     text: 'GitHub',
    //     items: [
    //       { text: '2', link: '' },
    //       { text: '3', link: ''}
    //     ]
    //   }        
    // ],
    sidebar: [{
      title:'指南',
      collapsable: false,
      children: [
        ['/guide/install','安装'],
        ['/guide/quickStart','快速上手'],
        ['/guide/globalConfig','全局配置'],
        ['/guide/i18n','国际化'],
        ['/guide/themeCustom','定制主题'],
      ]
      },
      {
        title:'组件',
        collapsable: false,
        children: [
          ['/parts/layout','布局'],
          ['/parts/layoutContainer','布局容器'],
          ['/parts/color','色彩'],
          ['/parts/icon','图标'],
          ['/parts/button','按钮'],
        ]
        }
    ]
  }
}