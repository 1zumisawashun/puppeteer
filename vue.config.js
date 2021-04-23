module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    port: 8080,
    // localhostでvueからexpressにAPIリクエストを送信する為の設定
    proxy: 'http://localhost:3000'
    // Vueの時corsの代わりになる
},
}

