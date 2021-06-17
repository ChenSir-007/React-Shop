import * as instance from "../utils/authAxios"
import request from 'umi-request';
//获取登录接口
export const log = (params)=>{
  console.log(params);
  return request('http://cxsj.dempseydreamloong.top/api/customer/login', {
    method:'get',
    params,
    }).then(function (response){
    // console.log(response);
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
  return request('http://cxsj.dempseydreamloong.top/api/product/detail', {
    method:'get',
  }).then(function (response){
    return response;
  })
}

//获取用户列表
export const users =()=>{
  return request('http://cxsj.dempseydreamloong.top/api/customer/list', {
    method:'get',
  }).then(function (response){
    return response;
  })
}

//获取分类列表
export const categories =()=>{
  return request('http://cxsj.dempseydreamloong.top/api/category/list', {
    method:'get',
  }).then(function (response){
    console.log(response);
    return response;
  })
}

// 删除所选商品
export const Dele =(id)=>{
  // console.log(id)
  return request(`http://cxsj.dempseydreamloong.top/api/product/crud?id=${ id.id }`, {
    method:'put',
  }).then(function (response){
    return response;
  })
}

// 获取商品详情
export const Detail =(id)=>{
  return request('http://cxsj.dempseydreamloong.top/api/product/crud/'+id, {
    method:'get',
  }).then(function (response){
    // console.log(response);
    return response;
  })
}

// 获取商品分类
export const Category=(id)=>{
  return request('http://cxsj.dempseydreamloong.top/api/category/list', {
    method:'get',
  }).then(function (response){
    return response;
  })
}

// 修改商品详情
export const ChangeDetail =(id)=>{
  console.log(id);
  return request('http://cxsj.dempseydreamloong.top/api/product/crud/change', {
    method:'put',
    data:id,
  }).then(function (response){
    // console.log(response);
    return response;
  })
}

// 新增商品
export const Add=(product)=>{
  return instance.POST("/api/crud/add",product)
}

// 修改商品分类
export const Cate = (kind)=>{
  console.log(kind);
  return request(`http://cxsj.dempseydreamloong.top/api/category/type?kind=${kind.id}&name=${kind.name}`, {
    method:'put',
  }).then(function (response){
    return response;
  })
}

//获取评论列表(过滤前)
export const Comment = ()=>{
  return request('http://cxsj.dempseydreamloong.top/api/comment/origin', {
    method:'get',
  }).then(function (response){
    return response;
  })
}

//获取评论列表(过滤后)
export const Filter = ()=>{
  return request('http://cxsj.dempseydreamloong.top/api/comment/new', {
    method:'get',
  }).then(function (response){
    return response;
  })
}
