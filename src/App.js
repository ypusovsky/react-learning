import React, { useState } from "react";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
  const [posts, setPosts] = useState([
    {id:1, title: 'PostTitle1', body: 'Bla-bla'},
    {id:2, title: 'PostTitle2', body: 'Bla-bla'},
    {id:3, title: 'PostTitle3', body: 'Bla-bla'},
  ])

  const [post, setPost] = useState({title: '', body: ''});

  const addNewPost = (e) => {
    e.preventDefault();
    setPosts([...posts, {...post, id: Date.now()}]);
    setPost({title: '', body: ''});
  }

  return (
    <div>
      <form>
        <MyInput 
          type="text" 
          placeholder="Название поста"
          value={post.title}
          onChange={e => setPost({...post, title: e.target.value})}
        />
        <MyInput 
          type="text"
          placeholder="Описание поста"
          value={post.body}
          onChange={e => setPost({...post, body: e.target.value})}
        />
        <MyButton onClick={addNewPost}>Добавить пост</MyButton>
      </form>
      <PostList posts={posts} title="Список постов"/>
    </div>
  );
}

export default App;
