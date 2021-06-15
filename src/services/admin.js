import * as instance from "../utils/authAxios"
import request from 'umi-request';
//获取登录接口
export const log = (params)=>{
  return request('/api/customer/login', {
    method:'get',
    data:params,
    }).then(function (response){
      return response;
  })
}

//获取商品列表
export const list =()=>{
 /*  return new Promise((reslove, reject)=>{
    setTimeout(()=>{
      instance.GET('/api/detail')
      .then(res=>{
        reslove(res)
      })
    },10000)
  }) */
  return request('/api/detail', {
    method:'get',
  }).then(function (response){
    return response;
  })
}

//获取用户列表
export const users =()=>{
  return request('/api/customer/user', {
    method:'get',
  }).then(function (response){
    return response;
  })
}

//获取分类列表
export const categories =()=>{
  return request('/api/category', {
    method:'get',
  }).then(function (response){
    return response;
  })
}

// 删除所选商品
export const Dele=(id)=>{
  // console.log("ww")
  return instance.POST("/api/crud",id)
}

// 获取商品详情
export const Detail=(id)=>{
  return instance.GET("/api/crud/"+id)
}

// 获取商品分类
export const Category=(id)=>{
  return request('/api/category', {
    method:'get',
  }).then(function (response){
    return response;
  })
}

// 修改商品详情
export const ChangeDetail=(id)=>{
  return instance.PUT("/api/crud/change",id)
}

// 新增商品
export const Add=(product)=>{
  return instance.POST("/api/crud/add",product)
}

// 修改商品分类
export const Cate=(kind)=>{
    return instance.PUT("/api/type",kind)
}
