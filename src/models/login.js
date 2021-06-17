import {log} from "../services/admin"
import { message } from "antd";
import {login,isLogined} from "../utils/authLocal"
import { routerRedux } from 'dva'

export default {
  namespace:"login",
  state:{
    name:'',
    password:''
  },
  effects:{
    *login({payload},{call,put}){
      // console.log(payload);
      const result=yield call(log,payload)
      console.log(result.errorCode);
      if(result.errorCode===0){
        if(isLogined()) {
          message.success(
                `${payload.username}欢迎您~`
              );
              yield put(routerRedux.replace("/"))
        } else {
          login(result._id)
          message.success(
                `${payload.username}欢迎您~`
              );
              yield put(routerRedux.replace("/"))
        }
      }else{
        message.warn(
          '对不起您暂未注册!'
          // `${result.data.info}`
        );
      }
    }
  }
}
