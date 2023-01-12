import React, {useState} from 'react';
import MyInput from './UI/input/MyInput';
import MyButton from './UI/button/MyButton';


const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''});

    const addNewPost = (e) => {
      e.preventDefault();
      create({...post, id: Date.now()});
      setPost({title: '', body: ''});
    }

    return ( 
<form>
<MyInput 
  placeholder="Название поста"
  value={post.title}
  onChange={e => setPost({...post, title: e.target.value})}
/>
<MyInput 
  placeholder="Описание поста"
  value={post.body}
  onChange={e => setPost({...post, body: e.target.value})}
/>
<MyButton onClick={addNewPost}>Добавить пост</MyButton>
</form>
     );
}
 
export default PostForm;

