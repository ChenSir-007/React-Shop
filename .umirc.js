
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  history:'hash',
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: '商品评论过滤系统',
      favicon:'/favicon.ico',
      dll: false,
    }],
  ],
}

