import React, {useEffect, useState} from 'react';
import { Comment, Icon, Tooltip, Switch, List } from 'antd';
// import moment from 'moment';
import { useDispatch, useSelector} from 'dva';

const CommentFilter = () => {
  const dispatch = useDispatch();
  const [likes,setLikes] = useState(0);
  const [dislikes,setDislikes] = useState(0);
  const [action,setAction] = useState(null);
  useEffect(() => {
    dispatch({type:'comment/loadData'})
  },[dispatch]);
  const {comment,loading} = useSelector(({comment}) => ({
    comment : comment.comment,
    loading : comment.loading
  }))
  // const [data,setData] = useState(...comment);
  // console.log(loading);
  const like = () => {
    setLikes(1);
    setDislikes(0);
    setAction('liked')
  }
  const dislike = () => {
    setLikes(0);
    setDislikes(1);
    setAction('disliked')
  }
  const onChange = (checked) =>{
    if(checked === true){
      dispatch({type:'comment/loadNewData'})
    }else{
      dispatch({type:'comment/loadData'})
    }
  }
  const actions = [
    <span key="comment-basic-like">
        <Tooltip title="Like">
          <Icon
            type="like"
            theme={action === 'liked' ? 'filled' : 'outlined'}
            onClick={like}
          />
        </Tooltip>
        <span style={{ paddingLeft: 8, cursor: 'auto' }}>{likes}</span>
      </span>,
    <span key=' key="comment-basic-dislike"'>
        <Tooltip title="Dislike">
          <Icon
            type="dislike"
            theme={action === 'disliked' ? 'filled' : 'outlined'}
            onClick={dislike}
          />
        </Tooltip>
        <span style={{ paddingLeft: 8, cursor: 'auto' }}>{dislikes}</span>
      </span>,
    <span key="comment-basic-reply-to">Reply to</span>,
  ];
  return (
    <div>
      <Switch onChange={onChange} checkedChildren='已过滤' unCheckedChildren='未过滤' />
      <List
        className="comment-list"
        itemLayout="horizontal"
        loading={loading}
        dataSource={comment}
        renderItem={item => (
          <li>
            <Comment
              actions={actions}
              author={'Han Solo'}
              avatar={'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'}
              content={item.comment}
              // datetime={item.datetime}
            />
          </li>
        )}
      />,
    </div>
  );
}

export default CommentFilter;
