import pkg from './package'

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      { property: "og:title", content: "我是标题啊" },
      {
        property: "og:image",
        content:
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556648141122&di=c16c86a3040db285a96e04da69aeb54d&imgtype=0&src=http%3A%2F%2Fpic1.zhimg.com%2Fv2-edacf49c7bc88d02ae1fa4c38513dc68_b.jpg"
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
