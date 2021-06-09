export default {
  // 支持值为 Object 和 Array
  'GET /api/customer/login': {
    data:{
      code:1,
      _id:1,
    }
  },

  '/api/detail':{
    data:[{
      title: 'T-shirt',
      imgUrl: 'http://img.alicdn.com/imgextra/i1/1718714284/TB2HO.cnpXXXXaXXFXXXXXXXXXX_%21%211718714284.jpg',
      OriginPrice: '100¥',
      name: '服装',
      id:1,
    },
      {
        title: '鞋子',
        imgUrl: 'http://pic.51yuansu.com/pic3/cover/03/15/39/5b58620fb8c76_610.jpg',
        OriginPrice: '300¥',
        name: '鞋子',
        id:2,
      },
      {
        title: 'Switch',
        imgUrl: 'https://www.nintendo.com.hk/hardware/switch/img/btn_nintendoSwitch.jpg',
        OriginPrice: '2100¥',
        name: '电子产品',
        id:3,
      },
      {
        title: '衬衫',
        imgUrl: 'http://img01.taobaocdn.com/bao/uploaded/i1/T1LKeMFr4eXXXXXXXX_!!0-item_pic.jpg',
        OriginPrice: '200¥',
        name: '服装',
        id:4,
      }]
  },

  '/api/customer/user':{
    data:[{
      name: '陈Sir',
      tel: '187****9877',
      address: '杭州电子科技大学',
      createdAt: '2021.6.8',
    }]
  },

  // // GET 可忽略
  // '/api/users/1': { id: 1 },
  //
  // // 支持自定义函数，API 参考 express@4
  // 'POST /api/users/create': (req, res) => {
  //   // 添加跨域请求头
  //   res.setHeader('Access-Control-Allow-Origin', '*');
  //   res.end('ok');
  // },
}
