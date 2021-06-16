import {Comment, Filter} from "../services/admin"

export default({
  namespace:"comment",
  state:{
    comment:[],
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload, loading: false };
    },
    showLoading(state,action){
      return{...state,loading:true}
    }
  },
  effects:{
    *loadData({payload},{call,put}){
      yield put({type:'showLoading'});
      const result =yield call(Comment);
      // console.log(result,result.data)
      yield put({
        type: 'save',
        payload: {
          comment: result.data,
        },
      });
    },

    *loadNewData({payload},{call,put}){
      yield put({type:'showLoading'});
      const result =yield call(Filter);
      // console.log(result,result.data)
      yield put({
        type: 'save',
        payload: {
          filter: result.data,
        },
      });
    }
  }
})
